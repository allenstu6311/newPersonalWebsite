<template>
  <div class="mb-0 icon-list">
    <b-icon icon="facebook" variant="dark" class="icon"></b-icon>
    <b-icon icon="instagram" variant="dark" class="icon"></b-icon>
    <b-icon icon="github" variant="dark" class="icon"></b-icon>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class IconList extends Vue {}
</script>

<style>
.icon-list {
  letter-spacing: 5px;
  font-size: 30px;
}
.icon {
  cursor: pointer;
}
</style>