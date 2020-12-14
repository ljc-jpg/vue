<template>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <img src="../assets/callout.svg" alt="callout" class="w-50" />
        <h2 class="font-weight-light">随心写作，自由表达</h2>
        <p>
          <a href="#" class="btn btn-primary my-2" @click.prevent="write"
            >开始写文章</a
          >
        </p>
      </div>
    </div>
  </section>
  <h4 class="font-weight-bold text-center">发现精彩</h4>
  <!-- {{length}} -->
  <div class="container-fluid px-0 flex-shrink-0">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ColumnList from "../components/header/ColumnList.vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "../store/index";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    ColumnList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const { user, token } = store.state;
    
    //vuex响应式数据  store最简单获取数据方法 在计算属性中获取
    const list = computed(() => store.state.columns);

    const router = useRouter();
    const write = () => {
      if (token) {
        user.isLogin = true;
      } else {
        user.isLogin = false;
      }
      router.push("/create");
    };
    return {
      list,
      write,
    };
  },
});
</script>
