<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img
          src="../assets/logo.png"
          alt=""
          style="width: 60px; height: 60px"
        />
        <span>构建发布系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 左侧 -->
      <el-aside :width="isCollapse ? '64px' : '160px'">
        <!-- 侧边栏菜单 -->
        <div class="toggle-button"><i class="el-icon-s-fold" @click="toggleCollapse"></i></div>
        <el-menu
          background-color="#2F323A"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <!-- 一级菜单模板区 -->

          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">

            <template slot="title">
              <i :class=item.icon></i>
              <span>{{item.show_name}}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item :index="sub.url" v-for="sub in item.children" :key="sub.id">
              <template slot="title">
                <i :class=sub.icon></i>
                <span>{{sub.show_name}}</span>
              </template>
            </el-menu-item>

          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // 是否默认折叠左侧菜单
      isCollapse: false,
      menulist: []
    }
  },
  methods: {
    // 左侧菜单折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    logout () {
      // 清空token
      window.sessionStorage.clear()
      // 跳转login
      this.$router.push('/login')
    },
    async getMenuList () {
      const { data: res } = await this.$http.get('/menu/list.go')
      if (res.code !== 200) {
        return this.$message({
          'message': '获取菜单失败',
          'type': 'error'
        })
      }
      this.menulist = res.data
    }
  },
  created () {
    this.getMenuList()
  }
}
</script>

<style lang="less" scope>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #2f323a;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #2f323a;
  .el-menu{
    border-right: none;
  }
}

.el-main {
  background-color: #eaedf1;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 20px;
  line-height: 24px;
  color: white;
  text-align: center;
  cursor: pointer;
}
</style>
