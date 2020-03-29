# 1.Element-UI
    在git bash中输入：
    vue add element
    选择Import on demand(按需加载)和zh-CN(中文)
# 2.ECharts
## 2.1.引入第三方(未成功)
## 2.2.直接引入ECharts
    安装echarts
        npm install echarts --save
    在main.js中加载
        import myCharts from './common/js/myCharts.js'
        Vue.use(myCharts) 
    在main.js中引入echarts中内置的地图信息
        import '../node_modules/echarts/map/js/china.js'
        import '../node_modules/echarts/map/js/world.js'
    上面引入myCharts的路径和文件需要自己创建，并在myCharts中封装画echarts图表的所有方法


style中引入 lang="less" ，会产生报错，需要安装less和less-loader
npm install --save less
npm install --save less-loader
