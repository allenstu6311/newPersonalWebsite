<template>
  <div class="" id="form">
    <b-form>
      <b-row>
        <b-col>
          <input-box
            label="First Name"
            @inputBoxOnChange="firstNameOnChange"
            ref="firstName"
          ></input-box>
        </b-col>
        <b-col>
          <input-box
            label="Last Name"
            @inputBoxOnChange="lastNameOnChange"
            ref="lastName"
          ></input-box>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <input-box
            label="Email"
            @inputBoxOnChange="emailOnChange"
            ref="email"
          ></input-box>
        </b-col>
        <b-col>
          <input-box
            label="Subject"
            @inputBoxOnChange="subjectOnChange"
            ref="subject"
          ></input-box>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <textareaBox
            label="message"
            @textAreaOnChange="messageOnChange"
            ref="message"
          ></textareaBox>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Button label="送出" v-b-modal="'my-modal'"></Button>
        </b-col>
      </b-row>
    </b-form>
    <!-- 燈箱 -->
    <b-modal id="my-modal" @ok="sendEmail" ok-title="送出" cancel-title="取消"> 確定送出? </b-modal>
    <!-- 送出訊息 -->
    <div>
      <b-toast id="my-toast" :variant="sendStatus" solid>
        <template #toast-title>
          <div class="d-flex flex-grow-1 align-items-baseline">
            <strong class="mr-auto">通知</strong>
          </div>
        </template>
        {{ sendResult }}
      </b-toast>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import InputBox from "./InputBox.vue";
import textareaBox from "./textareaBox.vue";
import Button from "./Button.vue";
import emailjs from "@emailjs/browser";
import SharedMixin from "../../assets/static/js/util";

//定義信件欄位
interface MailForamt {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  components: {
    InputBox,
    textareaBox,
    Button,
  },
  mixins: [SharedMixin],
})
export default class Form extends Vue {
  public form: MailForamt = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };
  public SharedMixin = new SharedMixin();
  public sendResult: string = "";
  public sendStatus: string = "";

  /*更新輸入框*/
  firstNameOnChange(value: string) {
    this.form.firstName = value;
  }

  lastNameOnChange(value: string) {
    this.form.lastName = value;
  }

  emailOnChange(value: string) {
    this.form.email = value;
  }

  subjectOnChange(value: string) {
    this.form.subject = value;
  }

  messageOnChange(value: string) {
    this.form.message = value;
  }
  /*更新輸入框*/

  //寄信
  sendEmail() {
    let params = {
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      subject: this.form.subject,
      email: this.form.email,
      message: this.form.message,
    };
    emailjs
      .send(
        "service_jve14rf",
        "template_rn4wtkf",
        {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          subject: this.form.subject,
          email: this.form.email,
          message: this.form.message,
        },
        "7S1Tiqx9G5PJh-r9P"
      )
      .then(() => {
        // 觸發訊息
        this.sendResult = "送出成功";
        this.sendStatus = "warning";
        this.$bvToast.show("my-toast");
        //清空輸入框訊息
        this.SharedMixin.getChildComponent(this.$refs.firstName, "clearInput");
        this.SharedMixin.getChildComponent(this.$refs.lastName, "clearInput");
        this.SharedMixin.getChildComponent(this.$refs.email, "clearInput");
        this.SharedMixin.getChildComponent(this.$refs.subject, "clearInput");
        this.SharedMixin.getChildComponent(this.$refs.message, "clearInput");
      })
      .catch(() => {
        this.sendResult = "送出失敗";
        this.sendStatus = "danger";
        this.$bvToast.show("my-toast");
      });
  }
}
</script>
<style>
.toast {
  display: block !important;
}
</style>