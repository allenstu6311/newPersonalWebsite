<template>
  <div class="home">
    <Header :index="test" @routeInfo="routeInfo"></Header>
    <!-- 背景圖片 -->
    <Banner></Banner>
    <About></About>
    <Project></Project>
    <Footer></Footer>
  </div>
</template>


<script lang="ts">
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import Project from "../components/Project.vue";
import Footer from "../components/Footer.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  //引入組件
  components: {
    Header,
    Banner,
    About,
    Project,
    Footer,
  },
})
export default class home extends Vue {
  private Name: string = "Test";
  private Title: string = "Title";
  public test: string = "test";

  routeInfo(route: string) {
    console.log("emit", route);
  }
}
</script>
<style>

</style>