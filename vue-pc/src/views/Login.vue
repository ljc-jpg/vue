<template>
  <ValidateForm @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">电子邮箱地址</label>
      <validate-input
        :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入邮箱地址"
        type="text"
        ref="inputValidRef"
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
    <template #submit>
      <span class="btn btn-danger">submit</span>
    </template>
  </ValidateForm>
</template>
<script lang="ts">
import { defineComponent, reactive, ref,onMounted } from "vue";
import ValidateInput from "../components/form/ValidateInput.vue";
import { RulesProp } from "../components/form/ValidateInput.vue";
import ValidateForm from '../components/form/ValidateForm.vue';

export default defineComponent({
  name: "Login",
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailVal = ref("");
    const passWordVal = ref("");
    const inputValidRef = ref<any>("");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "电子邮箱格式不对" },
    ];

    const passWordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];
    const onFormSubmit = (result:boolean) =>{
      console.log(inputValidRef.value.valiDateInput())
    }
   
    return {
      emailRules,
      emailVal,
      passWordVal,
      passWordRules,
      onFormSubmit,
      inputValidRef
    };
  },
});
</script>