<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script type="text/javascript">
import echarts from 'echarts';


const option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {},
    },
  },
  series: [
    {
      name: '业务指标',
      type: 'gauge',
      detail: { formatter: '{value}%' },
      data: [{ value: 50, name: '完成率' }],
    },
  ],
};


export default {
  name: 'gauge',
  mounted() {
    const myChart = echarts.init(document.getElementById('chart'));
    setInterval(() => {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      myChart.setOption(option, true);
    }, 2000);
  },
};

</script>
