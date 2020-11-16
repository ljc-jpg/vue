<template>
  <form action="">
    <div class="mb-3">

      <label class="form-label">电子邮箱地址</label>
      <validate-input
        :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入邮箱地址"
        type="text"
      ></validate-input>

    </div>
    <div class="mb-3">

      <label class="form-label">密码</label>
      <validate-input
        :rules="passWordRules"
        v-model="passWordVal"
        placeholder="请输入密码"
        type="password"
      ></validate-input>

    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ValidateInput from "../components/form/ValidateInput.vue";
import { RulesProp } from "../components/form/ValidateInput.vue";

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
  },
  setup() {
    const emailVal = ref("");
    const passWordVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "电子邮箱格式不对" },
    ];

    const passWordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];

    return {
      emailRules,
      emailVal,
      passWordVal,
      passWordRules,
    };
  },
});
</script>