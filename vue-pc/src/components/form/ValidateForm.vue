<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
type ValidateFunc = () => Boolean;

export const emitter = mitt();

export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    //提交后触发判断所有输入框内容是否正常的事件和值
    let funcArr: ValidateFunc[] = [];
    const callback = (func?: ValidateFunc) => {
      if (func) {
        funcArr.push(func);
      }
    };
    //创建监听form-item-created事件
    emitter.on("form-item-created", callback);
    //组件销毁去除form-item-created事件
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });

    //子组件向父组件发送事件
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit("form-submit", result);
    };

    return {
      submitForm,
    };
  },
});
</script>