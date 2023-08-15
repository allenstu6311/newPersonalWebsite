<template>
  <div class="">
    <div class="header lg" ref="headerHeightLg">
      <b-nav class="custom-row">
        <icon-list></icon-list>
        <div class="d-flex">
          <b-nav-item @click="scrollTo('#banner')" :class="{ active: active == '#banner' }">Home</b-nav-item>
          <b-nav-item @click="scrollTo('#about')" :class="{ active: active == '#about' }">About</b-nav-item>
          <b-nav-item @click="scrollTo('#experince')" :class="{ active: active == '#experince' }">Experience</b-nav-item>
          <b-nav-item @click="scrollTo('#technology')"
            :class="{ active: active == '#technology' }">Technology</b-nav-item>
          <b-nav-item @click="scrollTo('#footer')" :class="{ active: active == '#footer' }">Contact</b-nav-item>
        </div>
      </b-nav>
    </div>

    <!-- 手機板sidebar -->
    <div class="header sm" ref="headerHeightSm">
      <div class="phone-header">
        <icon-list></icon-list>
        <ul class="control-sidebar" v-b-toggle.sidebar-right>
          <li :class="{ left: siderBarShowed }"></li>
          <li :class="{ dNone: siderBarShowed }"></li>
          <li :class="{ right: siderBarShowed }"></li>
        </ul>
      </div>

      <!-- sidebar -->
      <b-sidebar id="sidebar-right" aria-labelledby="sidebar-no-header-title" shadow right backdrop
        @shown="siderBarShowed = true" @hidden="siderBarShowed = false">
        <template>
          <div class="pt-5 sidebar-content">
            <!-- <icon-list></icon-list> -->
            <nav class="sidebar-url">
              <b-nav vertical>
                <b-nav-item @click="scrollTo('#banner')" :class="{ active: active == '#banner' }"
                  v-b-toggle.sidebar-right>Home</b-nav-item>
                <b-nav-item @click="scrollTo('#about')" :class="{ active: active == '#about' }"
                  v-b-toggle.sidebar-right>About</b-nav-item>
                <b-nav-item @click="scrollTo('#experince')" :class="{ active: active == '#experince' }"
                  v-b-toggle.sidebar-right>experince</b-nav-item>
                <b-nav-item @click="scrollTo('#technology')" :class="{ active: active == '#technology' }"
                  v-b-toggle.sidebar-right>Technology</b-nav-item>
                <b-nav-item @click="scrollTo('#footer')" :class="{ active: active == '#footer' }"
                  v-b-toggle.sidebar-right>Contact</b-nav-item>
              </b-nav>
            </nav>
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import Vue from "vue";
import { routes } from "../router/index";
import IconList from "./tool/IconList.vue";
import SharedMixin from "../assets/static/js/util"

@Component({
  props: ["index"],
  components: {
    IconList,

  },
  mixins: [SharedMixin],
})
export default class Header extends Vue {
  @Prop(String) index!: string;
  public route = routes;
  public propTest: string = this.index;
  public headerHeightInfo: number = 0;
  public scrollY: number = 0;
  public active: string = "";
  public isCalculating: boolean = false;
  public siderBarShowed: boolean = false;
  public SharedMixin = new SharedMixin();
  //監聽route
  // @Watch("$route", { deep: true })
  // onWatchLabelChanded(newVal:any, oldVal:any) {
  //   if(newVal.name == 'project'){
  //     this.active = '#project'
  //   }
  // }

  // 移動到目標區域
  scrollTo(target: string) {
    if (this.$route.path != "/") {
      this.$router.push("/");
      this.getScrollHeight();
    }

    this.$nextTick(() => {
      this.siderBarShowed = false;
      // this.$refs.sidebarRight.toggle()
      const element = document.querySelector(target) as HTMLElement;
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
      this.scrollY = document.documentElement.scrollTop + this.headerHeightInfo;

      this.SharedMixin.debounce(()=>this.getComponentHeight("#banner"),100)() ;
      this.SharedMixin.debounce(()=>this.getComponentHeight("#about"),100)() ;
      this.SharedMixin.debounce(()=>this.getComponentHeight("#experince"),100)() ;
      this.SharedMixin.debounce(()=>this.getComponentHeight("#technology"),100)() ;
      this.SharedMixin.debounce(()=>this.getComponentHeight("#footer"),100)() ;

    }
  }

  //取得組件的範圍並且判斷
   getComponentHeight(target: string) {
    this.$nextTick(() => {
      let targetElement = document.querySelector(target) as HTMLElement;
      const targetRect = targetElement.getBoundingClientRect();
      const top = targetRect.top + window.pageYOffset;
      const bottom = targetRect.bottom + window.pageYOffset;
      // console.log("scroll",target +":"+ top +"/" + this.scrollY + "/" + bottom);
      console.log('test2')
      const isInRange = this.scrollY > top - 500 && this.scrollY < bottom;

      if (isInRange) {
        this.active = target;
      }
    });
  }

  mounted() {
    const headerHeightElementLg = this.$refs.headerHeightLg as HTMLElement;
    const headerHeightElementSm = this.$refs.headerHeightSm as HTMLElement;
    // 取得各響應式header的高度
    this.headerHeightInfo =
      headerHeightElementLg.clientHeight > 1
        ? headerHeightElementLg.clientHeight
        : headerHeightElementSm.clientHeight;

    window.addEventListener("load", this.SharedMixin.debounce(this.getScrollHeight,500));
    window.addEventListener("scroll", this.SharedMixin.debounce(this.getScrollHeight,100));

  }


}
</script>
<style>
.header {
  width: 100%;
  padding-left: 20px;
  background-color: var(--bs-body-bg);
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0px 0px 5px 2px var(--bs-dark-border-subtle);
  z-index: 1000;
}

.active a {
  color: var(--bs-link-hover-color) !important;
}

.nav-link:hover,
.nav-link:focus {
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
}

.header.sm {
  display: none;
}

.phone-header {
  min-height: 75px;
}

/* 手機板 */
@media screen and (max-width: 768px) {
  .header.lg {
    display: none;
  }

  /* siderBar調整 */
  .header.sm {
    display: block;
    padding: 0 15px;
    z-index: 1000;
  }

  .phone-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .control-sidebar {
    width: 30px;
    height: 100%;
    padding-left: 0px;
    margin-bottom: 0;
    margin: 20px 0;
    z-index: 10000;
    position: relative;
  }

  .control-sidebar li {
    height: 3px;
    background-color: var(--bs-secondary);
    margin: 5px 0;
    transform: rotate(0deg);
    transition: 0.3s;
  }

  li.left {
    position: relative;
    transform: rotate(45deg);
    bottom: -5px;
    background-color: var(--bs-secondary);
    transition: 0.3s;
  }

  li.right {
    position: relative;
    transform: rotate(-45deg);
    background-color: var(--bs-secondary);
    bottom: 3px;
    transition: 0.3s;
  }

  .sidebar-content {
    text-align: right;
  }

  .sidebar-content .nav-item {
    width: 70%;
    text-align: left;
    border-bottom: 1px solid var(--bs-secondary);
  }

  .nav-link {
    padding-left: 10px;
  }

  /* sidebar url */
  .sidebar-url {
    margin-top: 50px;
  }

  /* 把叉叉用不見 */
  .b-sidebar-header .close {
    display: none;
  }
}
</style>