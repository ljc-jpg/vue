<template>
  <router-view />
</template>

<script lang="ts">
import store from "./store/index";

export default {
  name: "App",
  created() {
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    // beforeunload事件在页面刷新时先触发
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(store.state));
    });

    // 在页面加载时读取sessionStorage里的状态信息
    if (localStorage.getItem("store")) {
      store.replaceState(
        Object.assign(
          {},
          store.state,
          JSON.parse(localStorage.getItem("store") as string)
        )
      );
      localStorage.removeItem("store");
      console.log("11111111111",store.state)
    }
  },


};
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
