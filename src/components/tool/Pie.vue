<template>
  <canvas id="chart" ref="chartContainer"></canvas>
</template>


<script lang="ts">
import { Pie } from "vue-chartjs";
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

declare module 'chart.js' {
  interface Legend {
    afterFit?(): void;
  }
}

const labelsFix = {
  id: 'labelsFix',
  afterDraw: function (chart: any) {
    const legend = chart.legend;
    if (legend) {
      legend.top=40
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
    Pie,
  },
})
export default class PieComponent extends Vue {
  @Prop(Array) pieData!: pieDataItem[];
  @Prop(Array) pieLabel!: string[];

  private chart: any = null; //chart圖表
  public chartHasShow: boolean = false;

  mounted() {
    let self = this;
    const options = {
      threshold: 0.5, // 進入可視區域超過50%時觸發
    };

    //瀏覽器提供的方法監視DOM是否進入可是範圍
    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.chartContainer as HTMLElement); // 將監聽器綁定到 DOM 元素
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
  @Watch("pieData", { immediate: true })
  onWatchDataChanded(newVal: pieDataItem[], oldVal: pieDataItem[]) {
    if (newVal != oldVal && this.chartHasShow) {
      this.$nextTick(() => {
        this.chart.data.datasets = newVal;
        this.chart.update();
      });
    }
  }

  //監聽label
  @Watch("pieLabel", { immediate: true })
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
    const canvas = document.getElementById("chart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.chart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: this.pieLabel,
        datasets: this.pieData,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: "#fff",
              boxWidth: 60,
              font: {
                size: 17,
              },
            },

          },

          title: {
            display: true,
            text: "技術總表",
            color: "#fff",
            padding: {
              top: 0,
              bottom: 30,
            },
            font: {
              size: 25,
            },
          },
        },

      },
      plugins: [labelsFix]

    });
  }
}
</script>
<style>
#chart {
  width: 100% !important;
  margin: auto;
}

@media screen and (max-width: 990px) {
  #chart {
    width: 100% !important;
  }
}
</style>