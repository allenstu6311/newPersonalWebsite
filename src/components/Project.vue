<template>
  <div id="project" class="custom-container">
    <b-row>
      <!-- 圖片 -->
      <b-col class="bg-pic">
      </b-col>

      <!-- 標題 -->
      <b-col class="title">
        <div class="title-main">
          <h1>ALLEN LI</h1>
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
export default class Project extends Vue {
  mainProps = {
    center: true,
    fluidGrow: true,
  };
}
</script>
  <style scoped>
#project .bg-pic {
  background: url('https://picsum.photos/300/150/?image=43');
}

.title {
  width: 80%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  position: absolute;
  top: 45%;
  left: 8%;
  margin: auto;
  letter-spacing: 5px;
  color: var(--bs-body-bg);
}
.title-main {
  width: 100%;
}
.title-main h1 {
  font-size: 170px;
  font-weight: 900;
}
.title-subtitle {
  width: 100%;
}
</style>