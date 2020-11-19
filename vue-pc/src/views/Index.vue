<template>
  <div class="d-flex flex-column h-100">
    <v-header :user="user"></v-header>

    <div class="home-page container-md main">
      <!--包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们 -->
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref, computed } from "vue";
import VHeader from "../components/Header.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";

export default defineComponent({
  name: "Index",
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