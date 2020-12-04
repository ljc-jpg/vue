<template>
  <div class="validate-input-container pb-3">
    
    <input
      v-if="tag != 'textarea'"
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="valiDateInput"
      @input="updateValue"
    />

    <textarea
      v-else
      v-bind="$attrs"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="valiDateInput"
      @input="updateValue"
    />

    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>

  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from "vue";
import { emitter } from "./ValidateForm.vue";
import { RulesProp,TagType } from "../../store/index";

const emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: "input",
    },
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });

    const valiDateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = inputRef.val.trim() != "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    };
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit("update:modelValue", targetValue);
    };

    //插槽间传递事件 创建输入框判断事件
    onMounted(() => {
      emitter.emit("form-item-created", valiDateInput);
    });

    return {
      inputRef,
      valiDateInput,
      updateValue,
    };
  },
});
</script>