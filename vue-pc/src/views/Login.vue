<template>
  <!--监听子组件事件函数  -->
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
import { defineComponent, ref } from "vue";
import ValidateInput from "../components/form/ValidateInput.vue";
import ValidateForm from "../components/form/ValidateForm.vue";
import { useRouter } from "vue-router";
import { RulesProp } from "../store/index";
import { GlobalDataProps } from "../store/index";
import { useStore } from "vuex";
import axios from "axios";

export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱不能为空" },
      { type: "email", message: "电子邮箱格式不对" },
    ];

    const passWordRules: RulesProp = [
      { type: "required", message: "密码不能为空" },
    ];

    //取到子组件方法
    const inputValidRef = ref<any>("");
    //邮箱输入框值
    const emailVal = ref("zhuzheng@qq.com");
    //密码输入框值
    const passWordVal = ref("1");

    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const onFormSubmit = (result: boolean) => {
      if (result) {
        axios({
          url: "/cas-server/cas/login/zhuzheng" + "/" + passWordVal.value,
          method: "get",
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
        })
          .then((res) => {
            // console.log("登录后数据", res.data.articles);
            router.push("/home");
            store.commit("pushColumns", res.data.articles);
            store.commit("login", res.data.psw);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    return {
      emailRules,
      emailVal,
      passWordVal,
      passWordRules,
      onFormSubmit,
      inputValidRef,
    };
  },
});
</script>