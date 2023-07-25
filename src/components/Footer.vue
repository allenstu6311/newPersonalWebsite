<template>
  <!-- class="custom-container" -->
  <div id="footer" class="main-color">
    <b-row class="custom-row">
      <!-- 標題 -->
      <b-row class="title">
        <b-col class="">
          <h2>GET IN TOUCH!</h2>
        </b-col>
      </b-row>
      <!-- 表單區域 -->
      <b-row class="form-area">
        <!-- 聯絡方式-->
        <b-col class="contact" sm="12" lg="4">
          <div class="sub-title">
            <h3 class="bold">contact</h3>
          </div>
          <div class="content">
            <p>聯絡地址:桃園市桃園區力行路622號</p>
          </div>
          <div class="contact-method">
            <p>
              Tel: 0975119303​<br />
              email: stuallen6311@gmail.com
            </p>
          </div>
          <!-- icon -->
          <icon-list></icon-list>
        </b-col>

        <!-- 聯繫表單 -->
        <b-col sm="12" lg="8">
          <Form></Form>
        </b-col>
      </b-row>
    </b-row>
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
    Form,
  },
})
export default class Footer extends Vue {}
</script>
<style scoped>
#footer {
  padding-bottom: 150px;
}
#footer .title {
  width: 100%;
  text-align: center;
  margin: 80px auto 40px 0;
}
#footer .sub-title {
  letter-spacing: 3px;
  padding: 20px 0;
}
#footer .sub-title h3 {
  font-size: 35px;
}
#footer .title .col {
  padding: 0;
}
#footer .title h2 {
  border: 10px solid var(--bs-black);
  padding: 30px;
  font-size: 40px;
}
#footer .contact .content,
#footer .contact .contact-method {
  line-height: 1.5;
}
#footer .form-area {
  padding-right: 0;
}

@media screen and (max-width: 990px) {
  #footer{
    padding-bottom: 50px;
  }
  #footer .title {
    width: 100%;
    text-align: center;
    margin: 20px auto 20px 0;
  }
  #footer .contact {
    padding-left: calc((100% - 40%) / 2); 
    padding-right: calc((100% - 40%) / 2);
    margin-bottom: 30px;
  }
}
</style>