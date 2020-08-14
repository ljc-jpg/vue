<template>
  <div class="all">
    <div class="top">
      <v-top></v-top>
    </div>

    <div class="left">
      <v-menu :query="query" :list="list"></v-menu>
    </div>

    <div class="right">
      <!--包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们 -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import LeftMenu from "./LeftMenu.vue";
import Top from "./Top.vue";

import utils from "../../common/js/util.js";

export default {
  data() {
    return {
      query: "",
      list: [
        { msg: "Bruce Lee" },
        { msg: "Jackie Chan" },
        { msg: "Chuck Norris" },
        { msg: "Jet Li" },
        { msg: "Kung Fury" }
      ]
    };
  },
  created() {
    let that = this;
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
    let data = {
      userId: "16592598d4f5416f84769832a28b6de5"
    };
    //位登录设置请求设置token
    utils.setCookie(
      "token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkyYjE3Mzg5MjViNzQ5OTVhODc5Y2QwMzkxOGFmODA2IiwiZXhwIjoxNTk3MjgzODA4LCJ1c2VyIjoiY29tLmNsb3VkLm1vZGVsLlVzZXJANWU0YjFmYjUifQ.J_rTIDx-WEiUdV_e06Gq6ouYVX6OgY-oZfhLgiabEF8"
    );
    utils.requestFormData(
      "/user/selectByUser",
      "get",
      data,
      function(res) {
        console.log(res);
        that.routers = res.data;
      },
      function() {
        console.log("error");
      },
      false,
      "/cas-server"
    );
  },
  components: {
    "v-menu": LeftMenu,
    "v-top": Top
  },
  watch: {
    isCollapse(val, oldValue) {
      this.isActive = true;
    }
  },
  methods: {
    menuController(data) {
      this.isCollapse = !data;
    }
  }
};
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
.all {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.top {
  height: 10%;
  width: 100%;
  background-color: #f8f8f8;
}

.left {
  height: 90%;
  width: 15%;
  float: left;
}

.right {
  width: 85%;
  height: 90%;
  overflow: hidden;
  float: right;
}
</style>
