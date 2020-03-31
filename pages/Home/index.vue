<template>
    <div>
        <HomeTab />
        <!-- <div id="charts"></div> -->
        <div id="charts1"></div>
        <!-- <div id="charts2"></div> -->
        <CircleProgress />
    </div>
</template>

<script>
import CircleProgress from "../../components/CircleProgress"
import HomeTab from "../Home/HomeTab"
export default {
    name:"Home",
    components:{
        CircleProgress,
        HomeTab
    },
    mounted(){
        this.$api.getMapData()
        .then(res => {
            this.$charts.line('charts1',res.data.data)
        })
        // this.$charts.polar('charts')
        // this.$charts.country('charts2')
    }
}
</script>

<style scoped>
#charts,#charts1,#charts2{
    height: 500px;
    width: 500px;
}

</style>