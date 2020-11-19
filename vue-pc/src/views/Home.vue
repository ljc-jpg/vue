<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent , computed } from "vue";
import ColumnList from "../components/ColumnList.vue";
import { useStore } from 'vuex';
import { GlobalDataProps } from '../store/index'

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    //vuex响应式数据  store最简单获取数据方法 在计算属性中获取
    const list = computed(()=> store.state.columns)
    return {
      list
    };
  },
});
</script>
