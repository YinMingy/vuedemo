<template>
    <el-breadcrumb  separator="/">
        <el-breadcrumb-item><router-link to="/home">首页</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/about">V指令</router-link></el-breadcrumb-item>
        <el-breadcrumb-item><router-link to="/todo">ToDo</router-link></el-breadcrumb-item>
        <el-breadcrumb-item ><router-link to="/">退出</router-link></el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrump"
    }
</script>

<style scoped>
.el-breadcrumb{
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
}
</style>
