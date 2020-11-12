<template>
  <div class="all">
    <div class="top"></div>

    <div class="left"></div>

    <div class="main"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
.all {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: red;
}

.top {
  height: 10%;
  width: 100%;
  background: #e7e7e7;
}

.left {
  height: 90%;
  width: 15%;
  float: left;
  background: #a7a7a7;
}

.main {
  width: 84%;
  height: 89%;
  overflow: hidden;
  float: left;
  background: #b7c7c7;
}
</style>