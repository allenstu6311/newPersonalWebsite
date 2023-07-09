<template>

    <b-row id="footer">
      <Button label="1234"></Button>
      <b-col>
        <b-img
          src="https://picsum.photos/300/150/?image=44"
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
  import Button from "../components/tool/Button.vue";

@Component({
  components: {
    Button,
  },
})
  export default class Footer extends Vue {
    mainProps = {
      center: true,
      fluidGrow: true,
    };
  }
  </script>