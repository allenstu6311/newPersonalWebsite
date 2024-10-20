<template>
  <div id="sideProject" ref="sideProject" class="main-color blank">
    <b-row class="custom-row">
      <b-col class="title">
        <h2 class="bold">
          <font-awesome-icon
            icon="fa-solid fa-building"
            class="icon-awesome"
          />專案經歷
        </h2>
      </b-col>
    </b-row>
    <!-- 專案內容 -->
    <b-row class="custom-row">
      <b-col
        class="mb-4 project-item"
        sm="12"
        md="6"
        lg="4"
        v-for="(item, index) in projectData"
        :key="item.id"
      >
        <b-img
          :src="item.pic"
          @click="callModal(item.id, 'projectData')"
        ></b-img>
      </b-col>
    </b-row>
    <!-- 個人作品 -->
    <b-row class="custom-row sideProject-row">
      <b-col class="title">
        <h2 class="bold">
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="icon-awesome"
          />個人作品
        </h2>
      </b-col>
      <swiper
        class="swiper"
        :options="swiperOption"
        @slideChange="onSlideChange"
        ref="mySwiper"
      >
        <swiper-slide
          class="project-list"
          v-for="item in sideProjectData"
          :key="item.id"
          :value="item.id"
        >
          <b-col class="project-img">
            <b-img :src="item.pic" :value="item.id"></b-img>
          </b-col>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" ref="paginationByExperince"></div>
    </b-row>
    <!-- 燈箱 -->
    <mdoalByProject
      :id="modalData.id"
      :content="modalData.content"
      :url="modalData.url"
      ,
      :pic="modalData.pic"
      :skills="modalData.skills"
      @clearId="clearId"
    ></mdoalByProject>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import mdoalByProject from "../components/modal/modalByProject.vue";
import profectInfo from "../assets/static/js/projectInfo";
import { projectFormat } from "../assets/static/js/interfaceFormat";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import { faUser, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { BRow, BCol } from "bootstrap-vue";
import { VueConstructor } from "vue";

library.add(faUser, faBuilding);
gsap.registerPlugin(ScrollTrigger);

@Component({
  components: {
    mdoalByProject,
    Swiper,
    SwiperSlide,
  },
})
export default class sideProject extends Vue {
  public projectData: projectFormat[] = profectInfo.projectData;
  public sideProjectData: projectFormat[] = profectInfo.sideProjectData;
  public modalData: projectFormat = {
    id: "",
    pic: "",
    content: {
      title: "",
      introduce: "",
    },
    url: "",
    skills: [""],
  };

  //swiper設定
  public swiperOption = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    initialSlide: 0,
    autoplay: {
      delay: 5000,
    },
    on: {
      click: (e: any) => {
        this.callModal(
          String(e.target.getAttribute("value")),
          "sideProjectData"
        );
      },
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  callModal(id: string, dataFrom: string) {
    let index = ((this as any)[dataFrom] as projectFormat[]).findIndex(
      (item) => item.id === id
    );
    this.modalData = ((this as any)[dataFrom] as projectFormat[])[index];
  }
  clearId() {
    this.modalData = {
      id: "",
      pic: "",
      content: {
        title: "",
        introduce: "",
      },
      url: "",
      skills: [""],
    };
  }

  onSlideChange() {
    // console.log(this.picPath.cake);
  }

  mounted() {
    let self = this;
    this.$nextTick(() => {
      let projectItem = document.querySelectorAll(".project-item");
      let sideProject = document.querySelector(".sideProject-row");
      projectItem.forEach((element, index) => {
        gsap.to(element, {
          opacity: 1,
          y: -100,
          scrollTrigger: {
            trigger: element,
          },
        });
      });

      gsap.to(sideProject, {
        opacity: 1,
        y: -200,
        scrollTrigger: {
          trigger: sideProject,
        },
      });
    });
  }
}
</script>
<style>
.project-item {
  opacity: 0;
  position: relative;
  bottom: -100px;
}

.project-item img {
  border-radius: 5px;
}

.project-item,
.project-list {
  position: relative;
}

.project-item::before {
  content: "點擊查看更多";
  width: 94.5%;
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

.project-list::before {
  content: "點擊查看更多";
  width: 100%;
  height: 96%;
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

.project-item:hover::before {
  opacity: 0.6;
  transition: 0.5s;
  background-color: var(--bs-black);
}

.sideProject-row {
  opacity: 0;
  position: relative;
  bottom: -200px;
}

.swiper-container {
  height: 100% !important;
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
  margin-bottom: 10px;
}

.button.prev .icon {
  transform: rotate(31deg);
  font-size: 30px;
}

.swiper-pagination {
  position: relative;
  /* position: relative;
  text-align: center;
  left: calc((100% - 100px) /2); */
}
</style>
