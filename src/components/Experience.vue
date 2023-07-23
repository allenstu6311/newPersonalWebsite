<template>
  <div id="experince" ref="experince">
    <b-row class="custom-row">
      <b-col>
        <div class="title">
          <h2 class="bold">專案經歷</h2>
        </div>
        <swiper
          class="swiper"
          :options="swiperOption"
          @slideChange="onSlideChange"
          ref="mySwiper"
        >
          <swiper-slide class="project-list">
            <b-img :src="picPath.ifrs17" id="ifrs17"></b-img>
          </swiper-slide>
          <swiper-slide class="project-list">
            <b-img :src="picPath.anchuse" id="anchuse"></b-img>
          </swiper-slide>
          <swiper-slide class="project-list">
            <b-img :src="picPath.cake" id="cake"></b-img>
          </swiper-slide>
          <swiper-slide class="project-list">
            <b-img :src="picPath.gym" id="gym"></b-img>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" ref="paginationByExperince"></div>
      </b-col>
    </b-row>
    <!-- 燈箱 -->
    <mdoalByProject
      :id="modelData.id"
      :content="modelData.content"
      @clearId="clearId"
    ></mdoalByProject>
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
import mdoalByProject from "../components/modal/modalByProject.vue";

//圖片路徑架構
interface picPath {
  ifrs17: string;
  anchuse: string;
  cake: string;
  gym: string;
}

//燈箱架構
interface modelData {
  id: string;
  content: {
    title: string;
    introduce: string;
  };
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
  };

  //swiper設定
  public swiperOption = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      click: (swiper: any) => {
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
      1200:{
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
  };

  public showModel: Boolean = false;
  public paginationHeight:number = 0

  callModel(id: string) {
    switch (id) {
      case "ifrs17":
        this.modelData = {
          id: "ifrs17",
          content: {
            title: "IFRS17計算引擎系統",
            introduce: "這是我的第一次專案",
          },
        };

        break;

      case "anchuse":
        this.modelData = {
          id: "anchuse",
          content: {
            title: "按指穴",
            introduce: "這是我在學習班的團體專題",
          },
        };
        break;

      case "cake":
        this.modelData = {
          id: "cake",
          content: {
            title: "偷吃蛋糕",
            introduce: "這是我在學習班的第二次個人專題",
          },
        };
        break;

      case "gym":
        this.modelData = {
          id: "gym",
          content: {
            title: "巨星體能工作室",
            introduce: "這是我在學習班的第一次個人專題",
          },
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
    const experinceHeight:any = this.$refs.experince as HTMLElement
    this.paginationHeight =  paginationByExperince.clientHeight
    experinceHeight.style.height = experinceHeight.clientHeight + this.paginationHeight + 'px'
  }
}
</script>
<style>
#experince {
  background-color: var(--bs-black);
}

#experince .title {
  padding: 30px 0;
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
  #experince{
    margin-bottom: 30px;
  }
}
</style>
