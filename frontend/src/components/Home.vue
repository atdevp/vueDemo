<template>
<el-container class="home-container">
  <!-- 头部 -->
  <el-header>
    <div>
      <img src="../assets/logo.png" alt="" style="width: 50px; height: 50px">
      <span>代码构建发布系统</span>
    </div>
    <el-button type="info" @click="logout">退出</el-button>
  </el-header>
  <el-container>
    <!-- 左侧 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 主体 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang='less' scope>
.home-container{
  height: 100%;
}

.el-header{
  background-color: #373D41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  >div{
    display: flex;
    align-items: center;
    span{
      margin-left: 15px;
    }
  }
}

.el-aside{
  background-color: #373D41;
}

.el-main{
  background-color: #EAEDF1;
}
</style>
