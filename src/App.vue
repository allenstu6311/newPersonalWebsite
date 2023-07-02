<template>
  <div class="" id="app">
    <Header></Header>

    <h1>{{ test }}</h1>
    <button @click="Hello">+1</button>
    {{ Total }}
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Component from "vue-class-component";
import Vue from "vue";


@Component
export default class App extends Vue {
  private Name: string = "Test";
  private Title: string = "Title";
  public test: number = 123;

  Hello() {
    // this.test += 1;

  }

  get Total(): number {
    return this.test + 1;
  }



  mounted() {
    
  }
}
</script>

<style>
h1 {
  color: green;
}
</style>

