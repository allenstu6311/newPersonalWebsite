<template>
  <div class="mb-0 icon-list">
    <a
      href="https://www.facebook.com/profile.php?id=100004274040281"
      target="_blank"
    >
      <b-icon icon="facebook" variant="dark" class="icon"></b-icon>
    </a>
    <a
      href="https://www.instagram.com/allenstu6311/"
      target="_blank"
    >
      <b-icon icon="instagram" variant="dark" class="icon"></b-icon>
    </a>
    <a
      href="https://github.com/allenstu6311"
      target="_blank"
    >
      <b-icon icon="github" variant="dark" class="icon"></b-icon>
    </a>
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