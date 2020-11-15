<template>
  <form action="">
    <div class="mb-3">
      <label class="form-label">电子邮箱地址</label>
      <validate-input :rules="emailRules"></validate-input>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import ValidateInput from "../components/ValidateInput.vue";
import { RulesProp } from "../components/ValidateInput.vue";

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
  },
  setup() {
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "电子邮箱格式不对" }
    ];

    return {
      emailRules: emailRules,
    };
    
  },
});
</script>