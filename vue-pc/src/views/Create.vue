<template>
  <!--监听子组件事件函数  -->
  <ValidateForm @form-submit="onFormSubmit">
    <h4>新建文章</h4>
    <div class="mb-3">
      <label class="form-label">文章标题：</label>
      <validate-input
        :rules="postContent"
        v-model="titleVal"
        placeholder="请输入标题"
        type="text"
        ref="inputValidRef"
      ></validate-input>
    </div>

    <div class="mb-3">
      <label class="form-label">文章详情：</label>
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
import { PostProps, RulesProp } from "../store/index";
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
        const { columnId } = store.state.user;
        if (columnId) {
          const newPost: PostProps = {
            id: new Date().getTime(),
            title: titleVal.value,
            content: contentVal.value,
            columnId,
            createdAt: new Date().toLocaleString(),
          };
          store.commit("createPost", newPost);
          router.push("/column/" + columnId);
        }
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