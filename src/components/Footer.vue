<template>
  <div id="footer" class="custom-container">
    <b-col class="col-6  custom-row">
      <!-- 標題 -->
      <b-row class="title">
        <b-col class="">
          <h2>GET IN TOUCH!</h2>
        </b-col>
      </b-row>
      <!-- 表單區域 -->
      <b-row class="form-area">
        <!-- 聯絡方式-->
        <b-col class="col-3 contact">
          <div class="sub-title">
            <h3 class="bold">contact</h3>
          </div>
          <div class="content">
            <p>Agent – AA Management
              500 Terry Francine Street
              San Francisco, CA 94158
            </p>
          </div>
          <div class="contact-method">
            <p>Tel: 123-456-7890​<br>
              info@mysite.com
            </p>
          </div>
          <!-- icon -->
          <icon-list></icon-list>
        </b-col>

        <!-- 聯繫表單 -->
        <b-col class="col-7">
          <Form></Form>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>
  
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Button from "../components/tool/Button.vue";
import IconList from "./tool/IconList.vue";
import Form from "./tool/Form.vue";

@Component({
  components: {
    Button,
    IconList,
    Form
  },
})
export default class Footer extends Vue {

}
</script>
<style scoped>
#footer {
  background-color: var(--bs-teal);
}

#footer>.custom-row {
  padding: 100px 0 20px 0;
}

#footer .title {
  width: 100%;
  text-align: center;
  margin: 40px auto;
}

.sub-title {
  letter-spacing: 3px;
  padding: 20px 0;
}

.sub-title h3 {
  font-size: 35px;
}

.title .col {
  padding: 0;
}

#footer .title h2 {
  border: 10px solid var(--bs-black);
  padding: 30px;
  font-size: 40px;
}

.contact .content,
.contact .contact-method {
  line-height: 1.5;
}

.form-area {
  flex-wrap: nowrap;
  justify-content: space-between;
}</style>