<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="12" v-for="item in link" :key="item.path">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
          </div>
          <div class="text item">
            <router-link :to="item.path">{{item.title}}</router-link>
            <p>{{item.desc }}</p>
          </div>
        </el-card>
    </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      link: [{ title: '图标', path: '/echarts', desc: 'ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。' }, { title: 'a', path: 'aa', desc: 'b' }],
    };
  },
};

</script>

<style type="text/css">
  .home{
    margin:0 auto;
    width: 1000px;
  }
  .box-card{
    height: 300px;
    margin-bottom: 20px;

  }

</style>
