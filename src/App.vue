<template>
  <div id="app">
    <Header :index="test"></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  //引入組件
  components:{
    Header,
  }
})

export default class App extends Vue {
  private Name: string = "Test";
  private Title: string = "Title";
  public test :string= 'test';
  
}
</script>

<style>
h1 {
  color: green;
}
</style>

