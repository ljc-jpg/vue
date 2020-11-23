<template>
{{length}}
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";

export default defineComponent({
  setup() {
    const route = useRoute().params;
    const store = useStore<GlobalDataProps>();

    const length = computed(() => store.getters);
    console.log(length)
    return {
      length
    };
  },
});
</script>
