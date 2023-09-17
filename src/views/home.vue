<template>
  <div class="home">
    <Banner></Banner>
    <About></About>
    <!-- <Experience></Experience> -->
    <SideProject></SideProject>
    <Technology></Technology>
    <Footer></Footer>
  </div>
</template>


<script lang="ts">
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import Technology from "../components/Technology.vue";
import Component from "vue-class-component";
import Vue from "vue";
import Footer from "../components/Footer.vue";
import Experience from "../components/Experience.vue";
import SideProject from "../components/SideProject.vue";

@Component({
  //引入組件
  components: {
    Banner,
    About,
    Technology,
    Experience,
    SideProject,
    Footer
  },
})
export default class home extends Vue {
  private Name: string = "Test";
  private Title: string = "Title";
  public test: string = "test";

  routeInfo(route: string) {
    // console.log("emit", route);
  }
}
</script>
<style>

</style>