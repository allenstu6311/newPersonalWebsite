<template>
  <!-- https://zh.wix.com/website-template/view/html/1887?originUrl=https%3A%2F%2Fzh.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_button&esi=aadd66cb-30de-48bf-ac46-163b36c82fd7 -->
  <div id="app">
    <Header :index="test" @routeInfo="routeInfo"></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";

@Component({
  //引入組件
  components: {
    Header,
    // Footer
  },
})

export default class App extends Vue {
  private Name: string = "Test";
  private Title: string = "Title";
  public test: string = "test";

  routeInfo(route: string) {
    console.log("emit", route);
  }
}
</script>

<style></style>

