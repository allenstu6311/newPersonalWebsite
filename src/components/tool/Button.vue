<template>
    <b-button class="custom-button" variant="dark">{{ label }}</b-button>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";


@Component({
  props:{
    label:String,
  }
})
export default class Button extends Vue {
  @Prop(String) label!: string;

}
</script>
<style scoped>
.custom-button{
  padding: 10px 15px;
}
</style>
