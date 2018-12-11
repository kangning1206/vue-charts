<template>
  <div>
    <div id="chart"></div>
  </div>
</template>
<script type="text/javascript">
import echarts from 'echarts';

function createNodes(widthCount, heightCount) {
  const nodes = [];
  for (let i = 0; i < widthCount; i++) {
    for (let j = 0; j < heightCount; j++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        value: 1,
      });
    }
  }
  return nodes;
}

function createEdges(widthCount, heightCount) {
  const edges = [];
  for (let i = 0; i < widthCount; i++) {
    for (let j = 0; j < heightCount; j++) {
      if (i < widthCount - 1) {
        edges.push({
          source: i + j * widthCount,
          target: i + 1 + j * widthCount,
          value: 1,
        });
      }
      if (j < heightCount - 1) {
        edges.push({
          source: i + j * widthCount,
          target: i + (j + 1) * widthCount,
          value: 1,
        });
      }
    }
  }
  return edges;
}

const nodes = createNodes(50, 50);
const edges = createEdges(50, 50);

const option = {
  series: [{
    type: 'graphGL',
    nodes,
    edges,
    itemStyle: {
      color: 'rgba(255,255,255,0.8)',
    },
    lineStyle: {
      color: 'rgba(255,255,255,0.8)',
      width: 3,
    },
    forceAtlas2: {
      steps: 5,
      jitterTolerence: 10,
      edgeWeightInfluence: 4,
    },
  }],
};


export default {
  name: 'Graphglaa',
  mounted() {
    const myChart = echarts.init(document.getElementById('chart'));
    myChart.setOption(option, true);
  },
};

</script>
