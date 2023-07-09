<template>
  <!-- https://zh.wix.com/website-template/view/html/1887?originUrl=https%3A%2F%2Fzh.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_button&esi=aadd66cb-30de-48bf-ac46-163b36c82fd7 -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component

export default class App extends Vue {}
</script>

<style>
#app{
  overflow: hidden;
}

</style>

