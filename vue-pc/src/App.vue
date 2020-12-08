<template>
  <router-view />
</template>

<script lang="ts">
import store from "./store/index";
import axios from "axios";

export default {
  created() {
    //刷新store里数据状态不变   beforeunload事件在页面刷新前触发
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(store.state));
    });
    if (localStorage.getItem("store")) {
      store.replaceState(
        Object.assign(
          {},
          store.state,
          JSON.parse(localStorage.getItem("store") as string)
        )
      );
      localStorage.removeItem("store");
    }

    //关闭页面用户登出
    window.onbeforeunload = function (event: Event) {
      if (store.state.user.isLogin) {
        return;
      }
      axios({
        url: "/cas-server/cas/loginOut",
        method: "post",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => {
          store.commit("loginOut");
        })
        .catch((error) => {
          console.log(error);
        });
    };
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
