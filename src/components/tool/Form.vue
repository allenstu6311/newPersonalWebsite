<template>
    <div class="">
        <b-form>
            <b-row>
                <b-col>
                    <input-box label="First Name" @inputBoxOnChange="firstNameOnChange"></input-box>
                </b-col>
                <b-col>
                    <input-box label="Last Name" @inputBoxOnChange="lastNameOnChange"></input-box>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <input-box label="Email" @inputBoxOnChange="emailOnChange"></input-box>
                </b-col>
                <b-col>
                    <input-box label="Subject" @inputBoxOnChange="subjectOnChange"></input-box>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <textareaBox label="message" @textAreaOnChange="messageOnChange"></textareaBox>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <Button label="送出" @btnOnClick="sendEmail" v-b-modal="'my-modal'"></Button>
                </b-col>
            </b-row>
        </b-form>
        <b-modal id="my-modal">Hello From My Modal!</b-modal>
    </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Vue from "vue";
import InputBox from "./InputBox.vue";
import textareaBox from "./textareaBox.vue"
import Button from "./Button.vue";
import emailjs from '@emailjs/browser';

//定義信件欄位
interface MailForamt {
    firstName: string
    lastName: string
    email: string,
    subject: string,
    message: string,
}

@Component({
    components: {
        InputBox,
        textareaBox,
        Button
    }
})

export default class Form extends Vue {
    public firstName: string = ""
    public form: MailForamt = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    }



    firstNameOnChange(value: string) {
        this.form.firstName = value
    }

    lastNameOnChange(value: string) {
        this.form.lastName = value
    }

    emailOnChange(value: string) {
        this.form.email = value
    }

    subjectOnChange(value: string) {
        this.form.subject = value
    }

    messageOnChange(value: string) {
        this.form.message = value
    }


    sendEmail() {

        // emailjs.send("service_jve14rf", "template_rn4wtkf", {

        //     firstName: this.form.firstName,
        //     lastName: this.form.lastName,
        //     email: '',
        //     message: this.form.message,
        // }, '7S1Tiqx9G5PJh-r9P');

    }
}
</script>
<style scoped></style>