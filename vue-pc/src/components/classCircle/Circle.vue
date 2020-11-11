<template>
  <div class="circle">
    <div class="circle-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/profile' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/classCircle' }">活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="circle-main">
      <div class="circle-center"></div>

      <div class="circle-table">
        <el-table :data="tableData" border style="width: 100%" height="100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址" width="180"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="circle-foot">

      </div>
    </div>
  </div>
</template>

<script>
import utils from "../../common/js/util.js";
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  created() {
    let that = this;
    let s = that.tableData;
    console.log(s);
    that.tableData = that.tableData.concat(s);

    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
    let data = {
      userId: "16592598d4f5416f84769832a28b6de5"
    };
    //位登录设置请求设置token
    utils.setCookie(
      "token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkyYjE3Mzg5MjViNzQ5OTVhODc5Y2QwMzkxOGFmODA2IiwiZXhwIjoxNTk3MjgzODA4LCJ1c2VyIjoiY29tLmNsb3VkLm1vZGVsLlVzZXJANWU0YjFmYjUifQ.J_rTIDx-WEiUdV_e06Gq6ouYVX6OgY-oZfhLgiabEF8"
    );
    // utils.requestFormData(
    //   "/user/selectByUser",
    //   "get",
    //   data,
    //   function(res) {
    //     console.log(res);
    //     that.routers = res.data;
    //   },
    //   function() {
    //     console.log("error");
    //   },
    //   false,
    //   "/cas-server"
    // );
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
.circle {
  height: 100%;
  width: 100%;
  padding: 15px;
}
.el-table {
  font-size: 12px;
}
.circle-breadcrumb {
  height: 10%;
  background: rgb(211, 55, 151);
}
.circle-main {
  height: 90%;
  .circle-table {
    background: rgb(27, 212, 27);
    height: 80%;
  }
  .circle-center {
    background: #985;
    height: 10%;
  }
  .circle-foot{
    height: 10%;
    background: #585;
  }
}
</style>



