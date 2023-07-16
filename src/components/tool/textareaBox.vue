<template>
  <b-form-group :label="label + ':'" label-for="textarea-lazy" class="mt-3">
    <b-form-textarea
      id="textarea-lazy"
      class="textarea-content"
      lazy-formatter
      v-model="inputValue"
      @change="sendValue"
    ></b-form-textarea>
  </b-form-group>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({
  props: {
    label: String,
  },
})
export default class InputBox extends Vue {
  @Prop(String) label!: string;
  public inputValue: string = "";

  sendValue() {
    this.$emit("textAreaOnChange", this.inputValue);
  }

  clearInput() {
    this.inputValue = "";
  }

  mounted() {
    this.$emit("textAreaOnChange", this.inputValue);
  }
}
</script>
<style>
.form-group label {
  padding: 5px 0;
}

.textarea-content {
  border: 1px solid var(--bs-body-color) !important;
  background-color: transparent !important;
  border-radius: 0px;
}
</style>
