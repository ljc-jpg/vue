<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <a class="navbar-brand" href="#">专栏</a>

    <ul v-if="!user.isLogin" class="list-inline mb-0" style="height: 100%">
      <li class="list-inline-item">
        <a href="login" class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
         <DropDown :title="`你好 ${user.name}`">
          <DropDownItem><a href="/" class="dropdown-item"  @click.prevent="routerLink(`/home`)">主页</a></DropDownItem>
          <DropDownItem><a href="/" class="dropdown-item"  @click.prevent="routerLink(`/create`)">新建文章</a></DropDownItem >
          <DropDownItem><a href="/" class="dropdown-item"  @click.prevent="routerLink(`/column/${user.columnId}`)">我的专栏</a></DropDownItem>
          <DropDownItem><a href="/" class="dropdown-item"  >退出</a></DropDownItem >
        </DropDown>
      </li>
      <!-- :to="`/column/${user.columnId}`" -->
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DropDown from "../dropdown/DropDown.vue";
import DropDownItem from "../dropdown/DropDownItem.vue";
import { UserProps } from "../../store/index";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
    },
  },
  setup() {
    const router = useRouter();
    const routerLink = (data: string) => {
      router.push(data);
    };
    return {
      routerLink,
    };
  },
  components: {
    DropDown,
    DropDownItem,
  },
});
</script>