<template>
    <div>
        货值信息：
        <router-link to="/information/current">当前可售货值</router-link>
        <router-link to="/information/thatYear">当年可售货值</router-link>
        <router-link to="/information/fullPeriod">全期可售货值</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Management"
}
</script>

<style scoped>

</style>