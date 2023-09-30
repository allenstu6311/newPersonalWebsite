import ifrs17Project from "../../image/ifrs17Project.jpg";
import anchuseProject from "../../image/anchuseProject.jpg";
import cakeProject from "../../image/cakeProject.jpg";
import bpmProject from "../../image/bpmProject.jpg";
import find_711 from "../../image/7-11find.jpg";
import catchMoney from "../../image/catchMoney.jpg";
import fullPage from "../../image/fullPage.jpg";
import { projectFormat } from "./interfaceFormat";


  export const projectData:projectFormat[] = [
    {
      id: "ifrs17",
      pic: ifrs17Project,
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
      pic: bpmProject,
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
      pic: anchuseProject,
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
      pic: cakeProject,
      content: {
        title: "偷吃蛋糕",
        introduce:
          "我在學習班的第二次個人專題，主題為蛋糕店，這次的專題理念是針對許多女性愛吃甜點又怕胖，因此寫了一個計算熱量的計算機並且推薦適當的熱量的蛋糕給使用者，讓使用者能夠偷吃蛋糕。",
      },
      url: "https://allenstu6311.github.io/CAKE_Project/",
      skills: ["Html", "Css", "Js", "Jquery"],
    },

  ];

  export const sideProjectData:projectFormat[] = [
    {
        id: "find7-11",
        pic: find_711,
        content: {
          title: "7-11查詢系統",
          introduce:
            "查詢全台灣得7-11位置及供應的服務",
        },
        url: "https://allenstu6311.github.io/Find_7-Eleven/",
        skills: ["Vue", "Css", "Html", "Js", "Bootstrap"],
      },
      {
        id: "catchMoney",
        pic: catchMoney,
        content: {
          title: "接金幣小遊戲",
          introduce:
            "控制左右接金幣累積分數",
        },
        url: "",
        skills: ["Vue", "Css", "Html", "Js", "Bootstrap"],
      },
      {
        id: "fullPage",
        pic: fullPage,
        content: {
          title: "FullPage",
          introduce:
            "看網路上的fullpage的自製實作案例",
        },
        url: "",
        skills: ["Vue", "Css", "Html", "Js"],
      },
  ]
  
  export default {
    projectData,
    sideProjectData
  }