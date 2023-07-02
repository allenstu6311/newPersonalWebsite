<template>
  <div>
    <b-nav>
      <b-nav-item v-for="item in route" :key="item.name" :to="item.path">
        {{ item.name }}
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { routes } from "../router/index";

@Component
export default class Header extends Vue {
  public route = routes;
  mounted() {
    console.log(this.route);
  }
}
</script>