<template>
  <div id="technology" class="custom-container sub-color">
    <b-row class="custom-row">
      <!-- 文字介紹 -->
      <b-col class="font-content" lg="5" sm="12">
        <b-row class="intrduce" v-show="isFrontEnd">
          <div class="title">
            <h2 class="bold">FRONT-END</h2>
          </div>
          <div class="content">
            <p>
              在公司專案中我主要負責前端UI開發以及API的串接以及一些後端的修改，前端排版主要使用element
              plus以及bootstrap，目前框架都是使用Vue為主。
            </p>
          </div>
        </b-row>

        <b-row class="intrduce" v-show="!isFrontEnd">
          <div class="title">
            <h2 class="bold">BACK-END</h2>
          </div>
          <div class="content">
            <p>
              除了UI開發及API串接外，有時也要幫忙開發後端，目前公司主要是以java為主，自己私底下則會接觸NodeJs，過去在學習班也有使用過php。
            </p>
          </div>
        </b-row>

        <!-- 按鈕 -->
        <b-row class="button-group">
          <Button label="Front-End" @btnOnClick="changePieData(true)"></Button>
          <Button label="Back-End" @btnOnClick="changePieData(false)"></Button>
        </b-row>
      </b-col>

      <b-col class="chart" lg="6" sm="12">
        <!-- 圖形 -->
        <Pie :pieData="pieData" :pieLabel="pieLabel"></Pie>
      </b-col>
    </b-row>
  </div>
</template>
    
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Pie from "./tool/Pie.vue";
import Button from "./tool/Button.vue";

//定義chart中datasets架構
interface pieDataItem {
  backgroundColor: string[];
  data: number[];
}

@Component({
  components: {
    Pie,
    Button,
  },
})
export default class Technology extends Vue {
  //前端資料
  private frontEndData: pieDataItem[] = [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#0d6efd","#ff69b4"],
      data: [60, 20, 20, 20,15],
    },
  ];
  private frontEndLabel: string[] = [
    "Vue",
    "Html",
    "Css",
    "Js",
    "Jquery",
  ];

  //後端資料
  private backendData: pieDataItem[] = [
    {
      backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
      data: [60, 20, 10],
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
#technology {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
}

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

.font-content .button-group {
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 30px 0;
}

.chart {
  padding-bottom: 30px;
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
}</style>