<template>
  <div class="">
    <b-button class="custom-button mt-3" variant="dark" :id="id" @click="btonOnclick">{{
      label
    }}</b-button>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({
  props: {
    label: String,
    id:String
  },
})
export default class Button extends Vue {
  @Prop(String) label!: string;
  @Prop(String) id!: string;


  btonOnclick() {
    this.$emit("btnOnClick");
  }
}
</script>
<style>
.custom-button {
  width: 150px;
  padding: 10px 15px;
}
.tooltip{
  left: -20px !important; 
}
.tooltip .arrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 15px solid var(--bs-emphasis-color);
  border-bottom: 10px solid transparent;
  position: absolute;
  left: 100%;
}

</style>
