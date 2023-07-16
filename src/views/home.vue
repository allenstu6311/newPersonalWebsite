<template>
  <div class="home">
    <Banner></Banner>
    <About></About>
    <Technology></Technology>
  </div>
</template>


<script lang="ts">
import Banner from "../components/Banner.vue";
import About from "../components/About.vue";
import Technology from "../components/Technology.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  //引入組件
  components: {
    Banner,
    About,
    Technology
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