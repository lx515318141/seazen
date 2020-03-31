<template>
    <div>
        <el-tabs v-model="activeName" class="myTab">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name:"HomeTab",
    data(){
        return{
            activeName:"second"
        }
    }
}
</script>

<style>
/* scope可以使样式私有化，使当前样式只在当前模块中生效 */
.el-tabs__nav-wrap::after{
    height: 0;
}
.el-tabs__active-bar{
    height:0
}
.el-tabs__item{
    background: #f1f1f1;
    color: black;
    margin: 10px;
    padding: 0 40px;
}
.el-tabs__item.is-active{
    background: #419620;
    color: white;
}
.el-tabs__item:hover{
    color:inherit;
}
</style>