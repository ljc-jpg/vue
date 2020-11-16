<template>
  <form action="">
    <div class="mb-3">
      <label class="form-label">电子邮箱地址</label>
      <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
      {{ emailVal }}
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ValidateInput from "../components/ValidateInput.vue";
import { RulesProp } from "../components/ValidateInput.vue";

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
  },
  setup() {
    const emailVal = ref("viking");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "电子邮箱格式不对" },
    ];

    return {
      emailRules,
      emailVal,
    };
  },
});
</script>