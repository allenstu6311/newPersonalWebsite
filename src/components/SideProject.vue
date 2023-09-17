<template>
  <div id="sideProject" ref="sideProject" class="main-color blank">
    <b-row class="custom-row">
      <b-col class="title">
        <h2 class="bold">專案經歷</h2>
      </b-col>
    </b-row>
    <b-row class="custom-row">
      <b-col
        class="mb-4 project-list"
        sm="12"
        md="12"
        lg="4"
        v-for="item in projectData"
        :key="item.id"
      >
        <b-img :src="item.pic" @click="callModal(item.id)"></b-img>
      </b-col>
    </b-row>

    <!-- 燈箱 -->
    <mdoalByProject
      :id="modalData.id"
      :content="modalData.content"
      :url="modalData.url"
      :skills="modalData.skills"
      @clearId="clearId"
    ></mdoalByProject>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import mdoalByProject from "../components/modal/modalByProject.vue";
import ifrs17Project from "../assets/image/ifrs17Project.jpg";
import anchuseProject from "../assets/image/anchuseProject.jpg";
import cakeProject from "../assets/image/cakeProject.jpg";
import bpmProject from "../assets/image/bpmProject.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

console.log(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

interface projectInfo {
  id: string;
  pic: string;
  content: {
    title: string;
    introduce: string;
  };
  url: string;
  skills: string[];
}

//圖片路徑架構
interface picPath {
  ifrs17: string;
  anchuse: string;
  cake: string;
  bpm: string;
}

@Component({
  components: {
    mdoalByProject,
  },
})
export default class sideProject extends Vue {
  public projectData: projectInfo[] = [];
  public modalData: projectInfo | null = {
    id: "",
    pic: "",
    content: {
      title: "",
      introduce: "",
    },
    url: "",
    skills: [""],
  };
  public picPath: picPath = {
    ifrs17: ifrs17Project,
    anchuse: anchuseProject,
    cake: cakeProject,
    bpm: bpmProject,
  };

  clearId() {
    if (this.modalData) {
      this.modalData.id = "";
    }
  }

  callModal(id: string) {
    console.log(id);
    switch (id) {
      case "ifrs17":
        this.modalData = {
          id: "ifrs17",
          pic: this.picPath.ifrs17,
          content: {
            title: "IFRS17計算引擎系統",
            introduce:
              "IFRS 17是國際會計準則理事會制定的一套重要的會計準則，旨在統一和改進保險合約的會計處理方法，以提供更準確、一致和可比性的財務報告。我在專案主要是負責UI的開發，以及API的串接。",
          },
          url: "",
          skills: ["Vue", "Css", "Html", "Js", "Element"],
        };

        break;

      case "bpm":
        this.modalData = {
          id: "bpm",
          pic: this.picPath.bpm,
          content: {
            title: "BPM系統建置",
            introduce:
              "BPM是一種管理方法論，旨在優化和改進組織的業務流程，在這個專案中，前後端都會接觸到，所以在這個案子中負責的領域較廣，有開發API以及前端的資料綁定等等。",
          },
          url: "",
          skills: ["Vue", "Css", "Bootstrap", "Jquery", "Jsp", "Java"],
        };
        break;

      case "anchuse":
        this.modalData = {
          id: "anchuse",
          pic: this.picPath.anchuse,
          content: {
            title: "按指穴",
            introduce:
              "我在學習班的團體專題，主題是按摩養生館，裡面有預約以及購物車等功能，在這個專案中，第一次體驗到團隊開發，有別於過去個人專題只顧自己的開發，在很多東西的配合上產生許多衝突，但也學習到很多。",
          },
          url: "https://tibamef2e.com/cgd102/g2/",
          skills: ["Vue", "Scss", "Js", "Bootstrap", "Html"],
        };
        break;

      case "cake":
        this.modalData = {
          id: "cake",
          pic: this.picPath.cake,
          content: {
            title: "偷吃蛋糕",
            introduce:
              "我在學習班的第二次個人專題，主題為蛋糕店，這次的專題理念是針對許多女性愛吃甜點又怕胖，因此寫了一個計算熱量的計算機並且推薦適當的熱量的蛋糕給使用者，讓使用者能夠偷吃蛋糕。",
          },
          url: "https://allenstu6311.github.io/CAKE_Project/",
          skills: ["Html", "Css", "Js", "Jquery"],
        };
        break;
    }
  }

  mounted() {
    this.$nextTick(() => {
      let elements = document.querySelectorAll(".project-list");
      elements.forEach((element, index) => {
        gsap.to(element, {
          opacity: 1,
          y: -100,
          scrollTrigger: {
            trigger: element,
          },
        });
      });
    });

    this.projectData = [
      {
        id: "ifrs17",
        pic: this.picPath.ifrs17,
        content: {
          title: "IFRS17計算引擎系統",
          introduce:
            "IFRS 17是國際會計準則理事會制定的一套重要的會計準則，旨在統一和改進保險合約的會計處理方法，以提供更準確、一致和可比性的財務報告。我在專案主要是負責UI的開發，以及API的串接。",
        },
        url: "",
        skills: ["Vue", "Css", "Html", "Js", "Element"],
      },
      {
        id: "bpm",
        pic: this.picPath.bpm,
        content: {
          title: "BPM系統建置",
          introduce:
            "BPM是一種管理方法論，旨在優化和改進組織的業務流程，在這個專案中，前後端都會接觸到，所以在這個案子中負責的領域較廣，有開發API以及前端的資料綁定等等。",
        },
        url: "",
        skills: ["Vue", "Css", "Bootstrap", "Jquery", "Jsp", "Java"],
      },
      {
        id: "anchuse",
        pic: this.picPath.anchuse,
        content: {
          title: "按指穴",
          introduce:
            "我在學習班的團體專題，主題是按摩養生館，裡面有預約以及購物車等功能，在這個專案中，第一次體驗到團隊開發，有別於過去個人專題只顧自己的開發，在很多東西的配合上產生許多衝突，但也學習到很多。",
        },
        url: "https://tibamef2e.com/cgd102/g2/",
        skills: ["Vue", "Scss", "Js", "Bootstrap", "Html"],
      },
      {
        id: "cake",
        pic: this.picPath.cake,
        content: {
          title: "偷吃蛋糕",
          introduce:
            "我在學習班的第二次個人專題，主題為蛋糕店，這次的專題理念是針對許多女性愛吃甜點又怕胖，因此寫了一個計算熱量的計算機並且推薦適當的熱量的蛋糕給使用者，讓使用者能夠偷吃蛋糕。",
        },
        url: "https://allenstu6311.github.io/CAKE_Project/",
        skills: ["Html", "Css", "Js", "Jquery"],
      },
    ];
  }
}
</script>
<style>
.project-list {
  opacity: 0;
  position: relative;
  bottom: -100px;
}
.project-list img{
    border-radius: 5px;
}
</style>