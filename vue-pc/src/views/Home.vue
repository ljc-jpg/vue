<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList from "../components/ColumnList.vue";
import{ testData }from '../testData';

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    return {
      list: testData,
    };
  },
});
</script>
