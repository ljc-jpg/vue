<template>
  <div class="d-flex flex-column h-100">
    <div class="header">
      <v-header :user="user"></v-header>
    </div>

    <div class="home-page container-md main">
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
  height: 90%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>