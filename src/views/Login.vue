<template>
    <div class="login">
        <div class="login-container">
            <el-form class="login-form">
                <el-row>
                    <h3 class="title">login</h3>
                </el-row>
                <el-row>
                    <el-input class="el-input" placeholder="Username" v-model="loginForm.username">
                        <template slot="prepend">帐号</template>
                    </el-input>
                </el-row>
                <el-row>
                    <el-input class="el-input" placeholder="Password" v-model="loginForm.password" type="password">
                        <template slot="prepend">密码</template>
                    </el-input>
                </el-row>
                <el-row>
                    <el-button class="onload" @click = "onSubmit">登陆</el-button>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
    //import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                url: '/user/userInfo',
                users: []
            }
        },
        methods: {
            onSubmit() {
                let _this = this.loginForm;
                if (this.loginForm.username === '' || this.loginForm.password === '') {
                    alert('账号或密码不能为空');
                }else{
                    // this.$http({
                    //     method: 'get',
                    //     url: 'https://api.myjson.com/bins/m1n62',
                    //     data: this.loginForm
                    // })
                    //const { data } = this.$http.get(this.url);
                    if(this.loginForm.username === 'yinmy' && this.loginForm.password === 'hello'){
                        this.$router.push('/home');
                        alert("登录成功")
                    }else{
                        alert('账号或密码错误');
                    }
                    // this.router.push('/home');

                }
                // } else {
                //     this.$axios({
                //         method: 'post',
                //         url: 'https://api.myjson.com/bins/m1n62',
                //         data: _this.loginForm
                //     }).then(res => {
                //         console.log(res.data);
                //         _this.userToken = 'Bearer ' + res.data.token;
                //         // 将用户token保存到vuex中
                //         _this.changeLogin({ Authorization: _this.userToken });
                //         _this.$router.push('/home');
                //         alert('登陆成功');
                //     }).catch(error => {
                //         console.log(error);
                //         alert('账号或密码错误');
                //         // console.log(error);
                //     });
                }
        }
    }
</script>

<style scoped>
    .login {
        height: 100%;
        width: 100%;
    }
    .login-container {
        min-height: 100%;
        width: 100%;
        background-color: #454545;
        overflow: hidden;
    }
    .title {
        color: #FEFEFE;
        font-size: 25px;
        font-weight: bolder;
        text-align: center;
        font-style: normal;
        margin: 0 auto;
        padding-bottom: 5px;
    }
    .login-form {
        margin: 20% 35%;
    }
    .el-input {
        border: 1px solid rgba(255,255,255,0.1);
        /* background: rgba(0,0,0,0.1); */
        border-radius: 5px;
        color: #454545;
        font-size: 14px;
        background: transparent;
        margin-bottom: 5px;
    }
    .onload {
        width: 100%;
        /* background-color: blue; */
        margin-top: 15px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    }
</style>
