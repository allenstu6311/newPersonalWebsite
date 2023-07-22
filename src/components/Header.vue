<template>
  <div class="header" ref="headerHeight">
    <b-nav class="custom-row">
      <icon-list></icon-list>
      <div class="d-flex">
        <b-nav-item @click="scrollTo('#banner')" :class="{ active: active == '#banner' }">Home</b-nav-item>
        <b-nav-item @click="scrollTo('#about')" :class="{ active: active == '#about' }">About</b-nav-item>
        <b-nav-item @click="scrollTo('#experince')" :class="{ active: active == '#experince' }">experince</b-nav-item>
        <b-nav-item @click="scrollTo('#technology')" :class="{ active: active == '#technology' }">Technology</b-nav-item>
        <b-nav-item @click="scrollTo('#footer')" :class="{ active: active == '#footer' }">Contact</b-nav-item>
        <!-- <b-nav-item to="/project" :class="{ active: active == '#project' }">Project</b-nav-item> -->
      </div>
    </b-nav>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop,Watch } from "vue-property-decorator";
import Vue from "vue";
import { routes } from "../router/index";
import IconList from "./tool/IconList.vue";

@Component({
  props: ["index"],
  components: {
    IconList,
  },
})
export default class Header extends Vue {
  @Prop(String) index!: string;
  public route = routes;
  public propTest: string = this.index;
  public headerHeightInfo: number = 0;
  public scrollY: number = 0;
  public active: string = "";
  public isCalculating: boolean = false;

  //監聽route
  // @Watch("$route", { deep: true })
  // onWatchLabelChanded(newVal:any, oldVal:any) {
  //   if(newVal.name == 'project'){
  //     this.active = '#project'
  //   }
  // }

  // 移動到目標區域
  scrollTo(target: string) {
    if (this.$route.path != '/') {
      this.$router.push("/");
      this.getScrollHeight()
    }

    
    this.$nextTick(() => {
      console.log(this.$route.name)
      const element: any = document.querySelector(target);
      if (element) {
        const offset = this.headerHeightInfo; // 調整的像素距離
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth", // 捲動的動畫效果
        });
      }
    });
  }
  // 取得滾輪當前位置
  getScrollHeight() {

    if (this.$route.path != "/") {
      this.active = "#project";
    } else {
      this.scrollY =
        document.documentElement.scrollTop + this.headerHeightInfo + 100;
      this.getComponentHeight("#banner");
      this.getComponentHeight("#about");
      this.getComponentHeight("#technology");
      this.getComponentHeight("#experince");
      this.getComponentHeight("#footer");
    }
  }

  //取得組件的範圍並且判斷
  getComponentHeight(target: string) {
    this.$nextTick(() => {
      let targetElement: any = document.querySelector(target);
      const targetRect = targetElement.getBoundingClientRect();
      const top = targetRect.top + window.pageYOffset;
      const bottom = targetRect.bottom + window.pageYOffset;
      const isInRange = this.scrollY > top && this.scrollY < bottom;

      if (isInRange) {
        this.active = target;
      }
    });
  }

  mounted() {
    const headerHeightElement = this.$refs.headerHeight as HTMLElement;
    this.headerHeightInfo = headerHeightElement.clientHeight;
    window.addEventListener("load", this.getScrollHeight);
    window.addEventListener("scroll", this.getScrollHeight);
  }
}
</script>
<style>
.header {
  width: 100%;
  background-color: var(--bs-body-bg);
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0px 0px 5px 2px var(--bs-dark-border-subtle);
}

.nav {
  --bs-nav-link-padding-x: 2rem !important;
  --bs-nav-link-padding-y: 1.5rem !important;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-black);
  --bs-nav-link-hover-color: var(--bs-black);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  margin: auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  --bs-nav-link-color: var(--bs-black);
  color: var(--bs-black);
  text-decoration: none;
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}

.active a {
  color: var(--bs-link-hover-color) !important;
}

.nav-link:hover,
.nav-link:focus {
  --bs-nav-link-hover-color: var(--bs-black);
}
</style>