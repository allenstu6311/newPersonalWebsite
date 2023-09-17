<template>
  <canvas id="bar" ref="bar"></canvas>
</template>
  
  
  <script lang="ts">
import { Bar } from "vue-chartjs";
import { Prop, Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import Vue from "vue";

import {
  Chart as ChartJS,
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

declare module "chart.js" {
  interface Legend {
    afterFit?(): void;
  }
}

//調整標題距離
const labelsFix = {
  id: "labelsFix",
  afterDraw: function (chart: ChartJS) {
    const legend = chart.legend;
    if (legend) {
      legend.top = 40;
    }
  },
};

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  labelsFix
);

//定義chart中datasets架構
interface pieDataItem {
  backgroundColor: string[];
  data: number[];
}

@Component({
  components: {
    Bar,
  },
})
export default class HorizontalBar extends Vue {
  @Prop(Array) newData!: pieDataItem[];
  @Prop(Array) newLabel!: string[];

  private chart: any = null; //chart圖表
  public chartHasShow: boolean = false;

  mounted() {
    const options = {
      threshold: 0.5, // 進入可視區域超過50%時觸發
    };

    //瀏覽器提供的方法監視DOM是否進入可是範圍
    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.bar as HTMLElement); // 將監聽器綁定到 DOM 元素
  }

  //進入可是範圍才執行畫布渲染
  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.chartHasShow) {
        // 進入可視區域，可以在這裡執行相應的動作
        this.createChart();
        this.chartHasShow = true;
      }
    });
  }

  //監聽data
  @Watch("newData", { immediate: true })
  onWatchDataChanded(newVal: pieDataItem[], oldVal: pieDataItem[]) {
    if (newVal != oldVal && this.chartHasShow) {
        this.chart.data.datasets = []
        this.chart.update();
      setTimeout(() => {
        this.chart.data.datasets = newVal;
        this.chart.update();
      }, 100);
    }
  }

  //監聽label
  @Watch("newLabel", { immediate: true })
  onWatchLabelChanded(newVal: string[], oldVal: string[]) {
    if (newVal != oldVal && this.chartHasShow) {
      this.$nextTick(() => {
        this.chart.data.labels = newVal;
        this.chart.update();
      });
    }
  }

  //創建圖表
  createChart() {
    const canvas = document.getElementById("bar") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.chart = new Chart(ctx, {
      type: "bar",
      
      data: {
        labels: this.newLabel,
        datasets: this.newData,
  
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              color: "#fff",
              font: {
                size: 20,
              },
              
            },
      
          },
          x: {
            ticks: {
              color: "#fff",
              font: {
                size: 20,
              },
            },
            max:100
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip:{
            xAlign: 'left'
          },
          title: {
            display: false,
            text: "專業技能",
            color: "#fff",
            padding: {
              top: 0,
              bottom: 30,
            },
            font: {
              size: 30,
            },
          },
        },
      },
      plugins: [labelsFix],
    });
  }
}
</script>
  <style>
#bar {
  width: 100% !important;
  height: 500px;
  margin: auto;
}

@media screen and (max-width: 990px) {
  #bar {
    width: 100% !important;
  }
}
</style>