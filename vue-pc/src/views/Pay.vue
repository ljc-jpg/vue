<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import { ColumnProps } from "../components/ColumnList.vue";
import ColumnList from "../components/ColumnList.vue";

const Data: ColumnProps[] = [
  {
    id: 1,
    title: "test1",
    description: "这是test1专栏的简介，这是一个很有意思的简介，可以修改，看看",
    avatar:
      "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    id: 2,
    title: "test2",
    description: "这是test2专栏的简介，这是一个很有意思的简介，可以修改，看看",
    avatar:
      "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    id: 3,
    title: "test3",
    description: "这是test3专栏的简介，这是一个很有意思的简介，可以修改，看看",
    avatar:
      "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    id: 4,
    title: "test4",
    description: "这是test4专栏的简介，这是一个很有意思的简介，可以修改，看看",
    avatar:
      "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    id: 5,
    title: "test5",
    description: "这是test5专栏的简介，这是一个很有意思的简介，可以修改，看看",
    avatar:
      "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
];

export default defineComponent({
  name: "Pay",
  components: {
    ColumnList,
  },
  setup() {
    return {
      list: Data,
    };
  },
});
</script>

<style scoped lang="scss">
</style>