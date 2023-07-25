<template>
  <div id="banner" class="custom-container">
    <b-row>
      <!-- 背景圖片 -->
      <b-col class="bg-pic main-color">
        <b-img :src="bannerPicPath"></b-img>
      </b-col>
      <!-- 標題 -->
      <div class="title">
        <div class="title-font">
          <div class="title-main">
            <p class="bold">ALLEN</p>
            <p class="bold">LI</p>
          </div>
          <div class="title-subtitle">
            <span>Front-end Engineer</span>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import banner from "../assets/image/banner.jpg"

@Component({
  components: {
    Swiper,
    SwiperSlide,
  }
})
export default class Banner extends Vue {
  public bannerPicPath = banner

  //swiper設定
  public swiperOption = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000, // 幻燈片之間的時間間隔，這裡設為5秒
      disableOnInteraction: false, // 使用者互動後是否停止自動撥放，這裡設為false，不停止
    },
    speed: 1000

  };

}
</script>

<style>
#banner .bg-pic {
  background: url("../assets/image/banner.jpg");
  padding: 0;
}

#banner .bg-pic:before {
  content: "";
  width: 100%;
  height: 100%;
  background-color: var(--bs-secondary-color);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
}

#banner .title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  margin: auto;
  letter-spacing: 5px;
  color: var(--bs-body-bg);
  z-index: 100;
}

#banner .title-font {
  width: 100%;
  text-align: center;
}

#banner .title-main {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  animation: main-fall 2.5s ease-in-out;
}

#banner .title-main p {
  font-size: 130px;
  font-weight: 900;
  margin: 0 30px;
}

#banner .title-subtitle {
  width: 100%;
  position: relative;
  animation: sub-fall 2.5s ease-in-out;

}
@keyframes main-fall {
  0% {
    right: -500px;
    opacity: 0;

  }
  50% {
    right: 0;
    opacity: 1;

  }
  70% {
    right: -30px;

  }
  90% {
    right: 10px;
  }
  to {
    right: 0px;
    opacity: 1;

  }
}

@keyframes sub-fall {
  0% {
    left: -500px;
    opacity: 0;

  }
  50% {
    left: 0;
    opacity: 1;

  }
  70% {
    left: -30px;

  }
  90% {
    left: 10px;
  }
  to {
    left: 0px;
    opacity: 1;

  }
}

#banner>.row {
  position: relative;
  width: 100%;
  margin: 0;
}

@media screen and (max-width: 768px) {
  #banner .title-main {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  #banner .title-main p {
    font-size: 80px;
    font-weight: 900;
    margin: 0 30px;
  }
}</style>