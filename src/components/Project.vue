<template>
    <b-row id="project">
      <b-col>
        <b-img
          src="https://picsum.photos/300/150/?image=43"
          fluid
          alt="Responsive image"
          v-bind="mainProps"
        ></b-img>
      </b-col>
    </b-row>
  </template>
  
  <script lang="ts">
  import Component from "vue-class-component";
  import Vue from "vue";
  
  @Component
  export default class Project extends Vue {
    mainProps = {
      center: true,
      fluidGrow: true,
    };
  }
  </script>