<template>
  <div class="row">
    <div v-for="column in list" :key="column.articleId" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.banner" :alt="column.title" class="row-photo" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.articleContent }}</p>
          <router-link :to="`/column/${column.articleId}`"  class="btn btn-outline-primary" >进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ColumnProps } from "../../store/index";

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  }
});
</script>
<style scoped>
.row-photo {
  width: 90%;
}
</style>