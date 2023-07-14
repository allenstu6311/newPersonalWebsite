<template>
  <div class="header" ref="headerHeight">
    <b-nav>
      <icon-list></icon-list>
      <div class="d-flex">
        <b-nav-item @click="scrollTo('#banner')">Home</b-nav-item>
        <b-nav-item @click="scrollTo('#about')">About</b-nav-item>
        <b-nav-item @click="scrollTo('#project')">Project</b-nav-item>
        <b-nav-item @click="scrollTo('#footer')">Footer</b-nav-item>
        <b-nav-item to="/vitae">vitae</b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
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
  public headerHeightInfo: number = 0


  moveTo(route: string) {
    this.$emit("routeInfo", route);
  }
  // 移動到目標區域
  scrollTo(target: string) {
    if (this.$route.path != '/') {
      this.$router.push('/')
    }

    this.$nextTick(() => {
      const element: any = document.querySelector(target);
      if (element) {
        const offset = this.headerHeightInfo; // 調整的像素距離
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth' // 捲動的動畫效果
        });
      }
    })

  }

  mounted() {
    const headerHeightElement = this.$refs.headerHeight as HTMLElement;
    this.headerHeightInfo = headerHeightElement.clientHeight
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
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
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
</style>