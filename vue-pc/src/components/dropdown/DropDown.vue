<template>
  <div class="dropdown" ref="dropDownRef">
    <a  href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen" @click.prevent="toggleOpen2">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useClickOutSide from "../../hooks/useClickOutside";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const dropDownRef = ref<null | HTMLElement>(null);

    //下拉框点击打开关闭
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    //点击完下拉框内容关闭下拉框
    const toggleOpen2 = () => {
       isOpen.value = false;
    };

    const isClickOutside = useClickOutSide(dropDownRef);
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      toggleOpen,
      toggleOpen2,
      dropDownRef,
    };
  },
});
</script>

 