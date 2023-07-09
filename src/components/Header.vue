<template>
  <div>
    <b-nav>
      <b-nav-item href="#banner">Home</b-nav-item>
      <b-nav-item href="#about">About</b-nav-item>
      <b-nav-item href="#project">Project</b-nav-item>
    
      <!-- <b-nav-item v-for="item in route" :key="item.name" :to="item.path">
        {{ item.name }}
      </b-nav-item> -->
    </b-nav>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";
import { routes } from "../router/index";


@Component({
  props: ["index"],
})
export default class Header extends Vue {
  @Prop(String) index!: string;
  public route = routes;
  public propTest: string = this.index;

  moveTo(route: string) {
    this.$emit("routeInfo", route);
  }

  mounted() {
    console.log(this.index);
  }
}
</script>
<style>
.nav {
  --bs-nav-link-padding-x: 2rem !important;
  --bs-nav-link-padding-y: 1.5rem !important;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-black);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: var(--bs-secondary-color);
  background-color: var(--bs-border-color);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  justify-content: center;
  position: fixed;
  top: 0;
}

.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  --bs-nav-link-color: var(--bs-black);
  color: var(--bs-black);
  text-decoration: none;
  background: none;
  border: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
</style>