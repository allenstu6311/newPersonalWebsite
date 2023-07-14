<template>
    <b-button class="custom-button mt-3" variant="dark" @click="btonOnclick">{{ label }}</b-button>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";


@Component({
  props:{
    label:String,
    routeInfo:String,
  }
})
export default class Button extends Vue {
  @Prop(String) label!: string;
  @Prop(String) routeInfo!: string;

  btonOnclick(){
    this.$emit("btnOnClick")
  }

}
</script>
<style scoped>
.custom-button{
  width: 150px;
  padding: 10px 15px;
}
</style>
