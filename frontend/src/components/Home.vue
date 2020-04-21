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
        >
          <!-- 一级菜单模板区 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item index="1-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单模板区 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder"></i>
              <span>项目管理</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item index="2-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>项目列表</span>
              </template>
            </el-menu-item>

            <el-menu-item index="2-2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>项目添加</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单模板区 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span>应用管理</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item index="3-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>应用列表</span>
              </template>
            </el-menu-item>

            <el-menu-item index="3-2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>应用添加</span>
              </template>
            </el-menu-item>

            <el-menu-item index="3-3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>应用管理</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <!-- 一级菜单区域 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>持续集成</span>
            </template>

            <el-menu-item index="4-1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>编译</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4-2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>发布</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4-3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>回滚</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
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
      // 是否默认折叠左侧菜单
      isCollapse: false
    }
  },
  methods: {
    // 左侧菜单折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
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
