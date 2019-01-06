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
            <p style="line-height: 1.8;">{{item.desc }}</p>
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
      link: [
        {
          title: '图表-echarts',
          path: '/echarts',
          desc:
            'ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。',
        },
        {
          title: '图表-d3',
          path: '/d3',
          desc:
            'D3 (或者叫 D3.js )是一个基于 web 标准的 JavaScript 可视化库. D3 可以借助 SVG, Canvas 以及 HTML 将你的数据生动的展现出来. D3 结合了强大的可视化交互技术以及数据驱动 DOM 的技术结合起来, 让你可以借助于现代浏览器的强大功能自由的对数据进行可视化.',
        },
        {
          title: 'CSS',
          path: '/css',
          desc:
            'css 样式，主要是c33效果的使用',
        },
      ],
    };
  },
};
</script>

<style type="text/css">
body {
  background: #293c55;
}
.home {
  margin: 0 auto;
  width: 1000px;
}
.box-card {
  height: 300px;
  margin-bottom: 20px;
}
</style>
