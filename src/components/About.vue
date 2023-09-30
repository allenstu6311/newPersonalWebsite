<template>
  <div id="about" class="sub-color blank">
    <b-row class="custom-row">
      <!-- 個人照片 -->
      <b-col class="pic" sm="12" md="12" lg="6">
        <b-img :src="picPath" rounded="circle" fluid alt="Responsive image" @click="callEmojil">
        </b-img>
        <ul class="emojil-list">
          <li v-for="(item, index) in emolijArr" :key="index" class="emojil" :class="`emojil_${index}`">{{ item }}
          </li>
        </ul>
      </b-col>
      <!-- 文字介紹 -->
      <b-col class="content" sm="12" md="12" lg="6">
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
          <Button label="查看簡歷" id="tooltip-target-1" @btnOnClick="$bvModal.show('bv-modal-resume')"></Button>
          <!-- tip -->
          <b-tooltip target="tooltip-target-1" triggers="hover" placement="left" v-if="hideToolip == 'show'">
            <embed :src="pdfPath" type="application/pdf" width="100%" height="100%" />
          </b-tooltip>
        </b-col>
      </b-col>
    </b-row>
    <!-- 履歷燈箱 -->
    <b-modal id="bv-modal-resume" ok-title="下載" cancel-title="關閉" @ok="openCheckModal" @shown="controlTooltip('show')"
      @hidden="controlTooltip('')">
      <embed :src="pdfPath" type="application/pdf" width="100%" height="100%" />
    </b-modal>
    <!-- 確認燈箱 -->
    <b-modal id="bv-modal-check" centered ok-title="確定" cancel-title="取消" @ok="download">確定下載?</b-modal>
    <!-- 通知訊息 -->
    <b-toast id="download-toast" :variant="sendStatus" solid>
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto">通知</strong>
        </div>
      </template>
      {{ sendResult }}
    </b-toast>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Button from "../components/tool/Button.vue";
import pdfData from "../assets/image/vitae.pdf";
import personalphoto from "../assets/image/personalphoto.jpg";
import { saveAs } from "file-saver";
import { gsap, Power1, Power4 } from "gsap";
import SharedMixin from "../assets/static/js/util"

@Component({
  components: {
    Button,
  },
  mixins: [SharedMixin],
})
export default class About extends Vue {
  public pdfPath: string = pdfData;
  public picPath: string = personalphoto;
  public sendResult: string = "";
  public sendStatus: string = "";
  public hideToolip: string = '';
  public SharedMixin = new SharedMixin();
  public emolijArr: string[] = []

  mounted() {
    this.controlTooltip('')
    let tl: any = gsap.timeline();
  }

  openCheckModal(e: MouseEvent) {
    e.preventDefault();
    this.$bvModal.show("bv-modal-check");
  }

  controlTooltip(status: string) {
    if (status == 'show') {
      this.hideToolip = 'hide'
    } else {
      this.hideToolip = 'show'
    }
  }



  emojilAnimation() {
    this.emolijArr.push("😍")
    let tl: any = gsap.timeline();

    this.$nextTick(() => {
      tl.set(`emojil_${this.emolijArr.length - 1}`, {
        scale: .2,
      })

      tl.to(`.emojil_${this.emolijArr.length - 1}`, 1.5, {
        x: Math.random() * 200 - 100,
        y: -150 + Math.random() * 100 - 100,
        scale: 3,
        ease: Power4.easeOut,
      })
        .to(`.emojil_${this.emolijArr.length - 1}`, 2, {
          ease: Power1.easeIn,
          scale: 0
        })

    })
  }

  callEmojil() {
    this.emojilAnimation()
  }

  download() {
    try {
      // 下載檔案
      saveAs(this.pdfPath, "履歷.pdf");
      this.sendResult = "下載成功";
      this.sendStatus = "warning";
      this.$bvToast.show("download-toast");
    } catch (err) {
      this.sendResult = "下載失敗";
      this.sendStatus = "danger";
      this.$bvToast.show("download-toast");
    }
  }
}
</script>
<style scoped>
#about .pic {
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.emojil {
  position: absolute;
  left: 50%;
  /* bottom: 0; */
  /* opacity: 0; */
}

#about .pic img {
  width: 70%;
  box-shadow: 0px 0px 10px rgb(163, 162, 162);
  cursor: pointer;
}

/* .content .title {
  text-align: center;
  padding: 50px 20px;
} */

.content .title h1 {
  letter-spacing: 3px;
  font-size: 50px;
  color: #fff;
}

.content .text {
  width: 80%;
  margin: auto;
  line-height: 2;
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
}

.content .button {
  width: 80%;
  padding-bottom: 30px;
  margin: auto;
}

.tooltip {
  cursor: pointer;
}


@media screen and (max-width: 990px) {
  #about .button {
    text-align: center;
  }

  .content .title h1 {
    font-size: 40px;
    white-space: nowrap;
  }
}
</style>

