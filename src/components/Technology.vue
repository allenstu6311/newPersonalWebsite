<template>
  <div id="technology" class="custom-container sub-color blank">
    <b-row class="custom-row">
      <b-col class="title">
        <h2 class="bold"><font-awesome-icon :icon="['fas', 'book']" class="icon-awesome"/>專業技能</h2>
      </b-col>
    </b-row>
    <b-row class="custom-row">
      <b-col class="chart" lg="10" sm="12">
        <HorizontalBar :newData="pieData" :newLabel="pieLabel"></HorizontalBar>
      </b-col>
    </b-row>
    <b-row class="button-group">
      <Button label="Front-End" @btnOnClick="changePieData(true)"></Button>
      <Button label="Back-End" @btnOnClick="changePieData(false)"></Button>
    </b-row>
  </div>
</template>
    
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Pie from "@/components/chart/Pie.vue";
import HorizontalBar from "@/components/chart/HorizontalBar.vue";
import Button from "@/components/tool/Button.vue";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faBook)

//定義chart中datasets架構
interface pieDataItem {
  backgroundColor: string[];
  data: number[];
}

@Component({
  components: {
    Pie,
    Button,
    HorizontalBar,
  },
})
export default class Technology extends Vue {
  //前端資料
  private frontEndData: pieDataItem[] = [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#0d6efd", "#ff69b4"],
      data: [65, 50, 50, 60, 40],
    },
  ];
  private frontEndLabel: string[] = ["Vue", "Html", "Css", "Js", "Jquery"];

  //後端資料
  private backendData: pieDataItem[] = [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
      data: [60, 50, 30],
    },
  ];
  private backendLabel: string[] = ["Java", "Nodejs", "Php"];

  public pieData: pieDataItem[] = this.frontEndData;
  public pieLabel: string[] = this.frontEndLabel;
  public isFrontEnd: boolean = true;

  //變更圖表資料內容
  changePieData(isFront: boolean) {
    this.isFrontEnd = isFront;
    if (isFront) {
      this.pieData = this.frontEndData;
      this.pieLabel = this.frontEndLabel;
    } else {
      this.pieData = this.backendData;
      this.pieLabel = this.backendLabel;
    }
  }
}
</script>
<style scoped>
.font-content {
  margin: auto;
}

.intrduce {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.font-content .title {
  padding: 0;
}

.font-content .title h2 {
  font-size: 50px;
}

.font-content .content {
  padding: 0;
  line-height: 2;
  min-height: 220px;
  height: 100%;
}

.font-content .content p {
  font-size: 20px;
}

#technology .button-group {
  width: 100%;
  margin: auto;
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  letter-spacing: 2px;
}

#technology .button-group button {
  margin: 0 10px;
}

.chart {
  padding-bottom: 30px;
  margin: auto;
}

@media screen and (max-width: 990px) {
  .font-content .title {
    text-align: center;
    margin-bottom: 10px;
  }

  .font-content .title h2 {
    font-size: 40px;
  }

  .font-content .content {
    padding: 0 15px;
    line-height: 2;
    min-height: 250px;
  }

  .font-content .button-group {
    padding: 30px 10px;
    justify-content: space-around;
  }

  .chart {
    width: 100%;
  }
}
</style>