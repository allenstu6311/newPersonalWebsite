<template>
  <div>
    <b-nav>
      <b-nav-item v-for="item in route" :key="item.name" :to="item.path">
        {{ item.name }}
      </b-nav-item>
    </b-nav>
    <!-- <h1>{{ index }}</h1> -->
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

  mounted() {
    console.log(this.index);
  }
}
</script>