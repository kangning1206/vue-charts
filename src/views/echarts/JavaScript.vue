<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script type="text/javascript">
import echarts from 'echarts';

const data = {
  name: 'JavaScipt',
  children: [
    {
      name: '数据类型',
      children: [
        {
          name: '原始类型',
          children: [
            { name: 'Boolean', value: '布尔表示一个逻辑实体，可以有两个值：true 和 false。' },
            { name: 'String', value: 'JavaScript 字符串是不可更改的。这意味着字符串一旦被创建，就不能被修改。但是，可以基于对原始字符串的操作来创建新的字符串' },
            { name: 'Number', value: '除一般概念上的数字外，+Infinity，-Infinity 和 NaN也是数字类型' },
            { name: 'Undefined', value: '一个没有被赋值的变量会有个默认值 undefined' },
            { name: 'Null', value: 'Null 类型只有一个值： null' },
            { name: 'Symbol', value: '符号类型是唯一的并且是不可修改的, 并且也可以用来作为Object的key的值' },
          ],
        },
        {
          name: 'Object',
        },
      ],
    },
    {
      name: '其他',
    },
  ],
};

const option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },
  series: [{
    type: 'tree',

    data: [data],

    top: '1%',
    left: '7%',
    bottom: '1%',
    right: '20%',

    symbolSize: 7,

    label: {
      normal: {
        position: 'left',
        verticalAlign: 'middle',
        align: 'right',
        fontSize: 9,
      },
    },

    leaves: {
      label: {
        normal: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
        },
      },
    },

    expandAndCollapse: true,
    animationDuration: 550,
    animationDurationUpdate: 750,
  }],
};


export default {
  name: 'javascript',
  mounted() {
    const myChart = echarts.init(document.getElementById('chart'));
    myChart.setOption(option, true);
  },
};

</script>
