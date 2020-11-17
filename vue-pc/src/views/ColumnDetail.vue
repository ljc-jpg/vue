<template>
 <pre>{{route}}</pre>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    return {
        route
    };
  },
});
</script>
