<template>
  <!--监听子组件事件函数  -->
  <ValidateForm @form-submit="onFormSubmit">

    <div class="mb-3">
      <label class="form-label">标题</label>
      <validate-input
        :rules="postContent"
        v-model="titleVal"
        placeholder="请输入标题"
        type="text"
        ref="inputValidRef"
      ></validate-input>
    </div>

    <div class="mb-3">
      <label class="form-label">内容</label>
      <validate-input
        rows="10"
        tag="textarea"
        placeholder="请输入文章详情"
        :rules="postContent"
        v-model="contentVal"
      />
    </div>

    <template #submit>
      <span class="btn btn-primary">创建</span>
    </template>
  </ValidateForm>
  
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateInput from "../components/form/ValidateInput.vue";
import ValidateForm from "../components/form/ValidateForm.vue";
import { useRouter } from "vue-router";
import { RulesProp } from "../store/index";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const postContent: RulesProp = [
      { type: "required", message: "内容不能为空" },
    ];

    //取到子组件方法
    const inputValidRef = ref<any>("");

    const router = useRouter();
    //邮箱输入框值
    const titleVal = ref("");
    //密码输入框值
    const contentVal = ref("");

    const store = useStore();

    const onFormSubmit = (result: boolean) => {
      if (result) {
        // router.push("/home");
        // store.commit('login');
      }
    };
    return {
      postContent,
      titleVal,
      contentVal,
      onFormSubmit,
      inputValidRef,
    };
  },
});
</script>