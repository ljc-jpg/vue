import { createStore } from 'vuex'

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number
}

export interface RuleProp {
  type: "required" | "email";
  message: string;
}

export interface IndexProps {
  dom: string;
  login: string;
  casIndex: string;
  goodsIndex: string;
}

export type RulesProp = RuleProp[];

export type TagType = 'input' | 'textarea'
export interface ColumnProps {
  articleId: number;
  title: string;
  articleContent: string;
  banner?: string;
}
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  columnId: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
  token: string;
  Index: IndexProps;
}

export const indexs = {
  dom: '/api',
  login: 'http://127.0.0.1:8762/cas-server/login',
  casIndex: 'http://127.0.0.1:8762/cas-server/index',
  goodsIndex: 'http://127.0.0.1:8762/goods-server/index',
}

export const testData: ColumnProps[] = [
  {
    articleId: 1,
    title: 'test1的专栏',
    articleContent: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    banner: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    articleId: 2,
    title: 'test2的专栏',
    articleContent: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    banner: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    articleId: 3,
    title: 'test3的专栏',
    articleContent: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    banner: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  },
  {
    articleId: 4,
    title: 'test4的专栏',
    articleContent: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    banner: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
  }
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我的第一篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 2
  },
  {
    id: 2,
    title: '这是我的第二篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    createdAt: '2020-06-11 10:34:22',
    columnId: 2
  },
  {
    id: 3,
    title: '这是我的第三篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 2
  },
  {
    id: 4,
    title: '这是我的第四篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: 'https://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5edcc2329f2b4e28352b75eb.jpg?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
    createdAt: '2020-06-11 10:34:22',
    columnId: 2
  }
]

export const token = '';

export const user = {
  isLogin: false,
  name: "zhuzheng",
  id: 1,
  columnId: 2
}

export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: user,
    token: token,
    Index: indexs
  },
  //store方法 改变state静态值 外部可以调用
  mutations: {
    createPost(state, newPost) {
      state.posts.push(newPost);
    },
    login(state, token) {
      state.user.isLogin = true
      state.token = token;
    },
    loginOut(state) {
      state.user.isLogin = false;
      state.token = '';
    }
  },
  //相当于vue的计算属性
  getters: {
    getPostByColumnId: (state) => (columnId: number) => {
      return state.posts.filter(testPosts => testPosts.columnId == columnId)
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(testData => testData.articleId == id)
    }
  },
  actions: {
  },
  modules: {
  }
})