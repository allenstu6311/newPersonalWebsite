<template>
  <div id="about">
    <b-row class="custom-row">
      <b-col class="pic">
        <!-- <b-img
          src="https://picsum.photos/300/150/?image=42"
          fluid
          alt="Responsive image"
          v-bind="mainProps"
        ></b-img> -->
      </b-col>
      <b-col class="content">
        <b-col class="title">
          <h1 class="bold">ABOUT ME !</h1>
        </b-col>
        <b-col class="text">
          <p>
            我是一位擁有棒球背景的前端工程師。學生時期，我每天在球場上奔馳揮灑汗水。雖然未能打進職棒，但這段時間磨練了我不怕苦的精神和堅持到底的毅力。畢業後，我投入體能教練的工作，協助學生達到更健康的身體狀態。然而，由於疫情以及工作性質的關係，我開始感受到這份工作的不穩定性，對於行業前景也產生了擔憂。
          </p>
          <p>
            在這個關鍵的時刻，我接受了親友的介紹，進入了TibaMe緯育的前端工程師專業進修課程。我對於寫程式抱有極大的興趣，並在進修期間驚喜地發現自己能夠超前進度地學習。我的好奇心驅使著我不斷探索新事物，追求新的知識。進入職場後，我發現自己之前所學僅僅只是冰山一角。真正軟體開發的流程和技術令我吃驚，但我並沒有因此感到沮喪，反而被未知的世界點燃了學習的欲望之火！我渴望不斷精進自己的技能，並以最快的速度成為一位資深工程師。
          </p>
        </b-col>
        <!-- 按鈕 -->
        <b-col class="button">
          <Button label="查看簡歷"></Button>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Button from "../components/tool/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Banner extends Vue {
  mainProps = {
    center: true,
    fluidGrow: true,
  };
}
</script>
<style scoped>
#about {
  background-color: var(--bs-teal);
}
.content .title {
  text-align: center;
  padding: 50px 20px;
}
.content .title h1 {
  letter-spacing: 3px;
  font-size: 50px;
}
.content .text {
  width: 80%;
  margin: auto;
  line-height: 2;
  font-size: 14px;
  letter-spacing: 2px;
}
.content .button {
  width: 80%;
  padding-bottom: 30px;
  margin: auto;
}
</style>