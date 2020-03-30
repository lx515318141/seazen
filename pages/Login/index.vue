<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">登录</span>
            </div>
            <el-form label-width="100px" ref="ruloForm2" class="dome-ruloForm2">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruloForm2.username" auto-complete="on"></el-input>
                    <!-- auto-complete属性表示是否自动补全内容，默认为on自动补全，off为不自动补全 -->
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="text" v-model="ruloForm2.password" auto-complete="on"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSumit">提交</el-button>
                    <!-- type="primary" 表示主要按钮，详细参考element官网中button实例 -->
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
    name:"Login",
    data(){
        return{
            ruloForm2:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        ...mapMutations(["setToken","setUser"]),
        onSumit(){
            this.$api.getLogin({
                username:this.ruloForm2.username,
                password:this.ruloForm2.password
            })
            .then(res => {
                console.log(res.data);
                // 登录成功拿到数据后，将数据存入vuex
                this.setToken(res.data.token)
                this.setUser(res.data.user.username)
                // 将数据存到本地
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("username",res.data.user.username)
                // 进行跳转
                this.$router.push("/home")

            })
            console.log(this.ruloForm2);
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 18px;
}

.box-card {
    width: 40%;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
}
</style>