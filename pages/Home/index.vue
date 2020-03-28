<template>
    <div>
        Home
        <div id="charts"></div>
        <div id="charts1"></div>
        <div id="charts2"></div>
    </div>
</template>

<script>
export default {
    name:"Home",
    mounted(){
        this.$api.getMapData()
        .then(res => {
            // this.$charts.line('charts1',res.data.data)
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