<template>
  <div class="column-detail-page w-80 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column" >

      <div class="col-3 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border w-100" />
      </div>

      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted"> {{ column.description }} </p>
      </div>
    </div>

    <pre > {{posts}} </pre>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";

export default defineComponent({
  setup() {
    const columnById = useRoute().params.id;
    const store = useStore<GlobalDataProps>();
    //专栏内容
    const column = computed(() => store.getters.getColumnById(columnById));
    //文章内容
    const posts = computed(()=>store.getters.getPostByColumnId(columnById))
    return {
      column,
      posts
    };
  },
});
</script>
 
