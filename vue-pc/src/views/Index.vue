<template>
  <div class="d-flex flex-column h-100">
    <v-header :user="user"></v-header>

    <div class="home-page container-md main">
      <!--包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们 -->
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>

     <footer class="text-center py-4 text-secondary bg-light mt-6" v-if="user.isLogin">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>

  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import VHeader from "../components/Header.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";

export default defineComponent({
  components: {
    VHeader,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const user = computed(() => store.state.user);
    return {
      user,
    };
  },
});
</script>

<style scoped lang="scss">
.main {
  height: 90%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>