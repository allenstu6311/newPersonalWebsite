<template>
  <div id="banner" class="custom-container">
    <b-row>
      <!-- 背景圖片 -->
      <b-col class="bg-pic"></b-col>
      <!-- 標題 -->
      <b-col class="title">
        <div class="title-main">
          <h1 class="bold">ALLEN LI</h1>
        </div>
        <div class="title-subtitle">
          <h3>Front-end Engineer</h3>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Banner extends Vue {

}
</script>

<style scoped>
#banner .bg-pic {
    background: url('https://picsum.photos/300/150/?image=41');
}
#banner .bg-pic:before{
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--bs-secondary-color);
    opacity: .6;
    position: absolute;
    top: 0;
    left: 0;
}
.title {
  width: 80%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  position: absolute;
  top:35%;
  left: 8%;
  margin: auto;
  letter-spacing: 5px;
  color: var(--bs-body-bg);
}
.title-main {
  width: 100%;
}
.title-main h1 {
  font-size: 130px;
  font-weight: 900;
}
.title-subtitle {
  width: 100%;
}
#banner > .row {
  position: relative;
}
</style>