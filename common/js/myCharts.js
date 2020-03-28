// 在这里封装echarts,各种画echarts图表的方法封装在这里
// 注意：这里echarts没有采用按需引入的方式，只是为了方便学习


// 先引入之前安装的echarts
import echarts from 'echarts'
const install = function(Vue){
    // 双向数据绑定用到了defineProperties，是es5提供的一个拦截方案
    Object.defineProperties(Vue.prototype,{
        // 将echarts所有的方法都挂载到Vue的原型上
        $charts:{
            // defineProperties提供了两种方法，get和set，get用来获取，set用来设置
            get(){
                return {
                    // 画一条线，使用时调用$charts.line就可以使用，同时要传一个参数id(就是echarts要呈现的id)
                    line: function (id,data) {
                        // echarts初始化的写法，这两步是永远不变的
                        this.chart = echarts.init(document.getElementById(id));
                        // 清除以前所有的echarts，作为安全处理
                        this.chart.clear();
                        // 参数配置
                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: data,
                                type: 'line',
                                smooth: true
                            }]
                        };
                        // 设置他的参数，这部分不变
                        this.chart.setOption(optionData);
                    },
                    polar: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        var data = [];

                        for (var i = 0; i <= 100; i++) {
                            var theta = i / 100 * 360;
                            var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
                            data.push([r, theta]);
                        }

                        const optionData = {
                            title: {
                                text: '极坐标双数值轴'
                            },
                            legend: {
                                data: ['line']
                            },
                            polar: {},
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            angleAxis: {
                                type: 'value',
                                startAngle: 0
                            },
                            radiusAxis: {
                            },
                            series: [{
                                coordinateSystem: 'polar',
                                name: 'line',
                                type: 'line',
                                data: data
                            }]
                        }
                        this.chart.setOption(optionData);
                    },
                    country: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        const optionData = {
                            tooltip: {},
                            series: [{
                                name: '省市',
                                type: 'map',
                                map: 'china',
                                data: [
                                    { name: '北京', value: Math.round(Math.random() * 1000) },
                                    { name: '天津', value: Math.round(Math.random() * 1000) },
                                    { name: '上海', value: Math.round(Math.random() * 1000) },
                                    { name: '重庆', value: Math.round(Math.random() * 1000) },
                                    { name: '河北', value: Math.round(Math.random() * 1000) },
                                    { name: '河南', value: Math.round(Math.random() * 1000) },
                                    { name: '云南', value: Math.round(Math.random() * 1000) },
                                    { name: '辽宁', value: Math.round(Math.random() * 1000) },
                                    { name: '黑龙江', value: Math.round(Math.random() * 1000) },
                                    { name: '湖南', value: Math.round(Math.random() * 1000) },
                                    { name: '安徽', value: Math.round(Math.random() * 1000) },
                                    { name: '山东', value: Math.round(Math.random() * 1000) },
                                    { name: '新疆', value: Math.round(Math.random() * 1000) },
                                    { name: '江苏', value: Math.round(Math.random() * 1000) },
                                    { name: '浙江', value: Math.round(Math.random() * 1000) },
                                    { name: '江西', value: Math.round(Math.random() * 1000) },
                                    { name: '湖北', value: Math.round(Math.random() * 1000) },
                                    { name: '广西', value: Math.round(Math.random() * 1000) },
                                    { name: '甘肃', value: Math.round(Math.random() * 1000) },
                                    { name: '山西', value: Math.round(Math.random() * 1000) },
                                    { name: '内蒙古', value: Math.round(Math.random() * 1000) },
                                    { name: '陕西', value: Math.round(Math.random() * 1000) },
                                    { name: '吉林', value: Math.round(Math.random() * 1000) },
                                    { name: '福建', value: Math.round(Math.random() * 1000) },
                                    { name: '贵州', value: Math.round(Math.random() * 1000) },
                                    { name: '广东', value: Math.round(Math.random() * 1000) },
                                    { name: '青海', value: Math.round(Math.random() * 1000) },
                                    { name: '西藏', value: Math.round(Math.random() * 1000) },
                                    { name: '四川', value: Math.round(Math.random() * 1000) },
                                    { name: '宁夏', value: Math.round(Math.random() * 1000) },
                                    { name: '海南', value: Math.round(Math.random() * 1000) },
                                    { name: '台湾', value: Math.round(Math.random() * 1000) },
                                    { name: '香港', value: Math.round(Math.random() * 1000) },
                                    { name: '澳门', value: Math.round(Math.random() * 1000) }],
                                // roam属性可以设置地图是否可以缩放，true时可以放大，false时不可以
                                roam: true,
                                // zoom属性是放大倍数
                                zoom: 1.2,
                                aspectScale: 0.75,
                                label: {
                                    normal: {
                                        // 是否显示省份名称
                                        // show: true,
                                        textStyle: {
                                            color: 'rgba(0,0,0,0.4)'
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0.1)',
                                        borderColor: 'rgba(118,237,236,1)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(118,237,236,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }]
                        };
                        this.chart.setOption(optionData);
                        this.chart.on("click", function () {
                            console.log(this);
                        })
                        // 鼠标划过事件
                        this.chart.on('mouseover', function (params) {
                            // console.log(params);
                        });
                    },
                }
            }
        }
    })
}

export default {
    install
}