<template>
  <div id="banner" class="custom-container">
    <b-row>
      <!-- 背景圖片 -->
      <b-col class="bg-pic"></b-col>
      <!-- 標題 -->
      <div class="title">
        <div class="title-font">
          <div class="title-main">
            <p class="bold">ALLEN</p>
            <p class="bold">LI</p>
          </div>
          <div class="title-subtitle">
            <span>Front-end Engineer</span>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class Banner extends Vue {}
</script>

<style scoped>
#banner .bg-pic {
  background: url("https://picsum.photos/300/150/?image=41");
}
#banner .bg-pic:before {
  content: "";
  width: 100%;
  height: 100%;
  background-color: var(--bs-secondary-color);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
}
#banner .title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  margin: auto;
  letter-spacing: 5px;
  color: var(--bs-body-bg);
}
#banner .title-font {
  width: 100%;
  text-align: center;
}
#banner .title-main {
  width: 100%;
  display: flex;
  justify-content: center;
}
#banner .title-main p {
  font-size: 130px;
  font-weight: 900;
  margin: 0 30px;
}
#banner .title-subtitle {
  width: 100%;
}
#banner > .row {
  position: relative;
}

@media screen and (max-width: 768px) {
  #banner .title-main {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  #banner .title-main p {
    font-size: 85px;
    font-weight: 900;
    margin: 0 30px;
  }
}
</style>