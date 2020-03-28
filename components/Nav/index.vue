<template>
    <div class="nav-menu">
        <div class="nav-left">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAkCAYAAAAAa43JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQzQ1NzUyNkVFODExRTk4Q0Q1QTEyNkQ1RTNGMzhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEwQzQ1NzUzNkVFODExRTk4Q0Q1QTEyNkQ1RTNGMzhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTBDNDU3NTA2RUU4MTFFOThDRDVBMTI2RDVFM0YzOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTBDNDU3NTE2RUU4MTFFOThDRDVBMTI2RDVFM0YzOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BWMYUAAAJSklEQVR42uya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"
                alt
            >
        </div>
        <div class="nav-left">
            <h3>新城大运营平台</h3>
        </div>
        <div class="nav-content">
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                background-color="#419620"
                text-color="rgb(223, 252, 211)"
                active-text-color="#fff"
            >
                <el-menu-item index="1">
                    <router-link exact to="/">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/information">货值信息</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/management">货值管理</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/decision">决策分析</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                    <router-link to="/">指标库</router-link>
                </el-menu-item>
                <el-menu-item index="6">
                    <router-link to="/system">系统管理</router-link>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="nav-right">
            <div class="login-info">
                {{ userNick }}
                <el-button @click="logoutHandler">退出</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Nav",
    data() {
        return {
            activeIndex: "1",
            userNick:""
        };
    },
    mounted() {
        this.userNick = this.$store.state.user.username;
    },
    methods:{
        logoutHandler(){
            // 清除本地
            localStorage.clear();
            // vuex
            this.$store.commit("setToken",null);
            this.$store.commit("setUser",{});
            this.$router.push("/login");
        }
    }
}
</script>

<style lang="less" scoped>
a {
    display: block;
    width: 100%;
}

.nav-menu {
    display: flex;
}

.nav-left,
.nav-content,
.nav-right {
    float: left;
}

.nav-left {
    img {
        display: block;
        margin-top: 12px;
    }
    h3 {
        font-size: 20px;
        color: #fff;
        font-family: "Microsoft YaHei";
    }
}

.nav-left,
.nav-right {
    height: 60px;
    line-height: 60px;
    background: #419620;
    padding: 0 30px;
}

.nav-right {
    background: #2d7312;
}

.nav-content {
    flex: 1;
}

.login-info {
    font-size: 15px;
    color: #fff;
}
</style>