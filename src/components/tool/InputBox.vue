<template>
  <b-input-group :prepend="label + ' :'">
    <b-form-input
      v-model="inputValue"
      @change="sendValue"
      :class="{ errType: errorMsg }"
      @focus="checkStatus('focus')"
      @blur="checkStatus('blur')"
    ></b-form-input>
    <div class="has-error">{{ errorMsg }}</div>
  </b-input-group>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import Vue from "vue";

@Component({
  props: {
    label: String,
    type: String,
  },
})
export default class InputBox extends Vue {
  @Prop(String) label!: string;
  @Prop(String) type!: string;

  public inputValue: string = "";
  public errorMsg: string = "";
  public checking: Boolean = false;

  sendValue() {
    this.$emit("inputBoxOnChange", this.inputValue);
  }

  //驗證輸入框
  inputValueValidate() {
    if (this.$props.type && !this.errorMsg && this.inputValue) {
      return true;

    }else if(!this.$props.type){
      return true

    }
    return false;
  }

  //清空輸入框
  clearInput() {
    this.inputValue = "";
  }

  checkStatus(status: string) {
    if (status == "focus") {
      this.checking = true;
      this.checkErrType(this.inputValue);
 
    } else {
      this.checking = false;
      this.errorMsg = "";
      this.checkErrType("");
    }
  }

  @Watch("inputValue", { immediate: true })
  checkErrType(newVal: string) {
    let emaillCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // stuallen6311@gmai.com
    if (this.checking) {
      switch (this.$props.type) {
        case "name":
          if (newVal == "") {
            this.errorMsg = "必填值";
          } else {
            this.errorMsg = "";
          }
          break;

        case "email":
          if (newVal == "") {
            this.errorMsg = "必填值";
          } else if (!emaillCheck.test(this.inputValue)) {
            this.errorMsg = "email格式錯誤";
          } else {
            this.errorMsg = "";
          }
          break;
      }
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
