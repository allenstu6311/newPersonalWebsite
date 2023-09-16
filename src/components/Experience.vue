<template>
  <div id="experince" ref="experince" class="sub-color">
    <b-row class="custom-row">
      <b-col>
        <div class="title">
          <h2 class="bold">專案經歷</h2>
        </div>
        <swiper class="swiper" :options="swiperOption" @slideChange="onSlideChange" ref="mySwiper">
          <swiper-slide class="project-list">
            <b-img :src="picPath.ifrs17" id="ifrs17"></b-img>
          </swiper-slide>
          <swiper-slide class="project-list">
            <b-img :src="picPath.bpm" id="bpm"></b-img>
          </swiper-slide>
          <swiper-slide class="project-list">
            <b-img :src="picPath.anchuse" id="anchuse"></b-img>
          </swiper-slide>
          <swiper-slide class="project-list">
            <b-img :src="picPath.cake" id="cake"></b-img>
          </swiper-slide>
          <!-- <swiper-slide class="project-list">
            <b-img :src="picPath.gym" id="gym"></b-img>
          </swiper-slide> -->
        </swiper>
        <div class="swiper-pagination" ref="paginationByExperince"></div>
      </b-col>
    </b-row>
    <!-- 燈箱 -->
    <mdoalByProject :id="modelData.id" :content="modelData.content" :url="modelData.url" :skills="modelData.skills"
      @clearId="clearId"></mdoalByProject>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ifrs17Project from "../assets/image/ifrs17Project.jpg";
import anchuseProject from "../assets/image/anchuseProject.jpg";
import cakeProject from "../assets/image/cakeProject.jpg";
import gymProject from "../assets/image/gymProject.jpg";
import bpmProject from "../assets/image/bpmProject.jpg"
import mdoalByProject from "../components/modal/modalByProject.vue";

//圖片路徑架構
interface picPath {
  ifrs17: string;
  anchuse: string;
  cake: string;
  gym: string;
  bpm: string
}

//燈箱架構
interface modelData {
  id: string;
  content: {
    title: string;
    introduce: string;
  };
  url: string,
  skills: string[]
}

@Component({
  components: {
    Swiper,
    SwiperSlide,
    mdoalByProject,
  },
})
export default class Experience extends Vue {
  @Prop(String) label!: string;

  public picPath: picPath = {
    ifrs17: ifrs17Project,
    anchuse: anchuseProject,
    cake: cakeProject,
    gym: gymProject,
    bpm: bpmProject
  };

  //swiper設定
  public swiperOption = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay:{
      delay: 5000,
    },
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      click: (swiper: SwiperComponent|any) => {
        this.callModel(swiper.target.id);
      },
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      660: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  };

  public modelData: modelData = {
    id: "",
    content: {
      title: "",
      introduce: "",
    },
    url: '',
    skills: [""]
  };

  public showModel: Boolean = false;
  public paginationHeight: number = 0

  callModel(id: string) {
    switch (id) {
      case "ifrs17":
        this.modelData = {
          id: "ifrs17",
          content: {
            title: "IFRS17計算引擎系統",
            introduce: "IFRS 17是國際會計準則理事會制定的一套重要的會計準則，旨在統一和改進保險合約的會計處理方法，以提供更準確、一致和可比性的財務報告。我在專案主要是負責UI的開發，以及API的串接。",
          },
          url: '',
          skills: ["Vue", "Css", "Html", "Js", "Element"]
        };

        break;

      case "bpm":
        this.modelData = {
          id: "bpm",
          content: {
            title: "BPM系統建置",
            introduce: "BPM是一種管理方法論，旨在優化和改進組織的業務流程，在這個專案中，前後端都會接觸到，所以在這個案子中負責的領域較廣，有開發API以及前端的資料綁定等等。",
          },
          url: "",
          skills: ["Vue", "Css", "Bootstrap", "Jquery", "Jsp", "Java"]
        };
        break;

      case "anchuse":
        this.modelData = {
          id: "anchuse",
          content: {
            title: "按指穴",
            introduce: "我在學習班的團體專題，主題是按摩養生館，裡面有預約以及購物車等功能，在這個專案中，第一次體驗到團隊開發，有別於過去個人專題只顧自己的開發，在很多東西的配合上產生許多衝突，但也學習到很多。",
          },
          url: 'https://tibamef2e.com/cgd102/g2/',
          skills: ["Vue", "Scss", "Js", "Bootstrap", "Html"]
        };
        break;

      case "cake":
        this.modelData = {
          id: "cake",
          content: {
            title: "偷吃蛋糕",
            introduce: "我在學習班的第二次個人專題，主題為蛋糕店，這次的專題理念是針對許多女性愛吃甜點又怕胖，因此寫了一個計算熱量的計算機並且推薦適當的熱量的蛋糕給使用者，讓使用者能夠偷吃蛋糕。",
          },
          url: 'https://allenstu6311.github.io/CAKE_Project/',
          skills: ["Html", "Css", "Js", "Jquery"]
        };
        break;

      case "gym":
        this.modelData = {
          id: "gym",
          content: {
            title: "巨星體能工作室",
            introduce: "我在學習班的第一次個人專題，主題為健身房，希望可以沿用以前當教練時的專業來建構網站，此作品主要是針對於各種排版的挑戰，希望在每個頁面中都有不同的版面設計。",
          },
          url: "https://allenstu6311.github.io/Topic/",
          skills: ["Html", "Css"]
        };
        break;
    }
  }

  clearId() {
    this.modelData.id = "";
  }

  onSlideChange() {
    // console.log(this.picPath.cake);
  }

  mounted() {
    this.onSlideChange();
    // 加入輪播圖按鈕高度
    const paginationByExperince = this.$refs.paginationByExperince as HTMLElement
    const experinceHeight = this.$refs.experince as HTMLElement
    this.paginationHeight = paginationByExperince.clientHeight
    experinceHeight.style.height = experinceHeight.clientHeight + this.paginationHeight + 'px'
  }
}
</script>
<style>
#experince {
  padding-top: 100px;
}

#experince .title {
  padding: 50px 0;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
}

.button.prev .icon {
  transform: rotate(31deg);
  font-size: 30px;
}

.swiper {
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  user-select: none;
}

.swiper-slide {
  cursor: pointer;
}

.swiper-slide img {
  object-fit: cover;
}

.project-list {
  position: relative;
}

.project-list::before {
  content: "點擊查看更多";
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #fff;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  opacity: 0.1;
  pointer-events: none;
  font-weight: 900;
}

.project-list:hover::before {
  opacity: 0.6;
  transition: 0.5s;
  background-color: var(--bs-black);
}

@media screen and (max-width:990px) {
  #experince {
    padding-top: 30px;
  }
}
</style>
