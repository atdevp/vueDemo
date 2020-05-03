<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>

            <!-- 登录表单 -->
            <!-- :model 代表数据绑定 v-model 绑定具体属性 -->
            <!-- :rules 表单验证规则 prop 绑定具体input -->
            <!-- ref  定义实例对象 -->
            <el-form label-width="0px" class="login_form" ref="loginFormRef" :model="loginForm" :rules="ruleLoginForm">
                <el-form-item prop="email">
                    <el-input placeholder="Email" prefix-icon="el-icon-user" v-model="loginForm.email"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="Password" prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <!-- 登录前进行表单预验证 -->
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单绑定对象
      loginForm: {
        email: '',
        password: ''
      },
      //   表单验证规则对象
      ruleLoginForm: {
        email: [
          { required: true, message: '请输入登录邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   重置
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        // 结构赋值获取data对象
        const { data: res } = await this.$http.post('/users/login.go', this.loginForm)
        if (res.code !== 200) {
          // 登录弹出框
          this.$message({
            message: '登录失败',
            type: 'error'
          })
        }
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        })

        // 1. 登录成功后token保存到客户端的sessionStorage中
        // 1.1  项目中出现了登录职位的其他API接口，必须登录之后才能访问
        // 1.2  token保存在sessionStorage中
        // 2. 通过编程式导航跳转到后台主页

        window.sessionStorage.setItem('token', 'token ' + res.data.access_token)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
    .login_container {
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box {
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .avatar_box{
            width: 130px;
            height: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }

    .btns{
        display: flex;
        justify-content: flex-end;
    }

    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
</style>
