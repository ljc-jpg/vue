<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4">
      <div class="card">
        <img :src="column.avatar" :alt="column.title" />
        <div class="card-body">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text">{{ column.description }}</p>
          <router-link  :to="`/column/${column.id}`" class="btn btn-primary" >进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ColumnProps } from '../interfaceData';
 

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {},
});
</script>