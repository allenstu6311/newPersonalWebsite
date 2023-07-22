<template>
  <b-input-group :prepend="label + ' :'">
    <b-form-input v-model="inputValue" @change="sendValue" :class="{ errType: errorMsg }"
      @focus="checkStatus"></b-form-input>
    <div class="has-error">{{ errorMsg }}</div>
  </b-input-group>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import Vue from "vue";
import { textChangeRangeIsUnchanged } from "typescript";

@Component({
  props: {
    label: String,
    type: String
  },
})
export default class InputBox extends Vue {
  @Prop(String) label!: string;
  @Prop(String) type!: string;

  public inputValue: string = "";
  public errorMsg: string = "";
  public checking: Boolean = false

  sendValue() {
    this.$emit("inputBoxOnChange", this.inputValue);
  }

  clearInput() {
    this.inputValue = "";
  }

  checkStatus() {
    this.checking = true
    console.log(this.checking)
  }

  @Watch("$props.type", { immediate: true })
  checkErrType(newVal: string) {
 
      // if (!this.checking) return
      console.log('test',this.checking)
      switch (newVal) {
        case "name":
        this.$nextTick(() => {
          if (!this.inputValue && this.checking) {
            this.errorMsg = "必填值";
          }
        })
      }


  }



  mounted() {
    this.clearInput();
    this.$emit("inputBoxOnChange", this.inputValue);
  }
}
</script>
<style scoped>
.input-group {
  display: block;
}

.input-group-text {
  background-color: transparent;
  border: none;
  padding: 5px 0;
}

.form-control {
  background-color: transparent;
  border: 1px solid var(--bs-body-color);
  border-radius: 0px;
  padding: 2px 5px;
  display: block;
  width: 100% !important;
}

.form-control:focus {
  background-color: transparent;
  outline: none;
}

.errType {
  border: 1px solid var(--bs-danger);
}
</style>
