<template>
  <div class="menu">
    <div class="top-menu border-1px">
      <div class="content">
        <el-button type="danger">危险按钮</el-button>
      </div>
      <input v-model="query">
    </div>

    <div class="middle-menu">
      <div class="content">
        <el-button type="danger">危险按钮</el-button>
      </div>
      <div class="middle-content">
        <transition-group
          name="staggered-fade"
          tag="ul"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <li
            v-for="(item, index) in computedList"
            v-bind:key="item.msg"
            v-bind:data-index="index"
          >{{ item.msg }}</li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Velocity from "velocity-animate";

export default {
  data: function() {
    return {};
  },
  computed: {
    computedList: function() {
      let vm = this;
      let item = vm.list.filter(function(item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
      return item;
    }
  },
  created() {},
  //子组件接受父组件值
  props: {
    query: {
      type: String
    },
    list: {
      type: Array
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.menu {
  height: 100%;
  width: 100%;
}
.top-menu {
  height: 10%;
  // @include border-1px(green);
  background: #432;
}
.middle-menu {
  height: 100%;
  overflow: auto;
  // @include border-1px(red);
  background: #179a16;
  .middle-content {
    height: 300%;
  }
}
/* 修改滚动条样式 */
.middle-menu::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.middle-menu::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}

.middle-menu::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}

.middle-menu::-webkit-scrollbar-thumb:hover {
  background: #333;
}

.middle-menu::-webkit-scrollbar-corner {
  background: #179a16;
}
</style>

 
