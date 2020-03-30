<template>
    <div class="cp">
        <div class="my-svg">
            <!-- svg相当于一个盒子，宽高为110，内部圆心在55位置，半径为50，圆的粗细为10，则圆正好和svg挨着 -->
            <!-- 所有svg和其内部的图形位置关系是可以调整的 -->
            <svg width="110" height="110" class="svg">
            <!-- cx,cy,r为圆的圆心坐标及半径，stroke为圆颜色，stroke-width为圆圈的粗细，fill为圆内的填充 -->
                <circle cx="55" cy="55" r="50" stroke="#dcdcdc" stroke-width="10" fill="none"></circle>
                <circle 
                    cx="55" 
                    cy="55" 
                    r="50" 
                    stroke="#419620" 
                    stroke-width="10" 
                    fill="none" 
                    stroke-linecap="round" 
                    :stroke-dasharray="dashArrayWidth.end"
                ></circle>
            <!-- stroke-dasharray可控制用来描边的点划线的图案范式,即虚线的缺口和短线的长度 -->
            <!-- stroke-dasharray最少可以传两个参数，第一个参数为短划线长度，第二个为缺口长度，若再传更多参数以此循环 -->
            <!-- stroke-linecap对一条线进行描边时线的两个端点的描边样式的处理，round表示两个端点为圆形 -->
            </svg>
        </div>
        <p class="cp-text">{{ percentage }}</p>
    </div>
</template>

<script>
export default {
    name:"CircleProgress",
    data(){
        return{
            // percentage意为百分数
            percentage:0
        }
    },
    props:{
        // 分子
        num:{
            type:Number,
            default:25
        },
        // 分母
        den:{
            type:Number,
            default:100
        } 
    },
    computed:{
        dashArrayWidth(){
            // 计算百分不
            this.percentage = Math.round((this.num/this.den)*100)
            // 计算圆的周长
            var line = 2*Math.PI*50
            return {
                start:"0," + line,  // 开水状态
                end:line*(this.percentage/100)+","+line*(100-this.percentage/100)   // 结束状态
            }
        }
    }
}
</script>

<style scoped>

























.cp {
    position: relative;
    width: 110px;
    height: 110px;
    margin: 0 auto;
    display: inline-block;
}

.my-svg {
    transform: rotate(-90deg);
}

.cp-text {
    width: 100px;
    font-size: 22px;
    position: absolute;
    text-align: center;
    top: 38%;
    color: #419620;
}
</style>