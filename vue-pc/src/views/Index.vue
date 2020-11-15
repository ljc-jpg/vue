<template>
  <div class="all container">
    <div class="header">
      <v-header :user="user"></v-header>
    </div>

    <div class="main">
      <!--包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们 -->
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import VHeader from "../components/Header.vue";
import { UserProps } from "../components/Header.vue";

const user = {
  isLogin: true,
  name: "zhuzheng",
  id: 1,
};
export default defineComponent({
  name: "Index",
  components: {
    VHeader,
  },
  setup() {
    return {
      user: user,
    };
  },
});
</script>

<style scoped lang="scss">
.all {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.header {
  height: 10%;
  width: 100%;
  background: #e7e7e7;
}

.main {
  width: 100%;
  height: 90%;
  overflow: auto;
  float: left;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>