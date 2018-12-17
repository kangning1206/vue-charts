<template>
  <div>
    <div id="chart">
    </div>
  </div>
</template>
<script type="text/javascript">

/**
 * [cells 棋盘格子数据]
 * @return {[type]} [description]
 */
function cells() {
  const dataset = [];
  for (let i = 0; i < 64; i += 1) {
    const h = Math.floor(i / 8);
    const l = i % 8;
    dataset.push({ x: h, y: l });
  }
  return dataset;
}

function start(d3) {
  const width = 1000;
  const height = 1000;

  // 横向和纵向棋盘文字
  const xdata = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ydata = [8, 7, 6, 5, 4, 3, 2, 1];
  const dataset = cells();
  // 格子正方形变长大小100
  const cellWidth = 100;
  // 颜色，白方、黑房
  const color = ['#f0f0f0', 'black'];

  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('style', 'border:1px solid #333;background:#000');

  const g = svg.append('g').attr('transform', 'translate(100, 100)');

  const gborder = svg.append('g');

  gborder
    .append('rect')
    .attr('stroke-width', '2')
    .attr('x', 98)
    .attr('y', 98)
    .attr('width', 804)
    .attr('height', 804)
    .attr('fill', 'none')
    .attr('stroke', '#f0f0f0')
    .attr('stroke-width', 3);

  // top
  xdata.forEach((d, i) => {
    gborder
      .append('text')
      .attr('x', () => i * 100 + 150)
      .attr('y', 90)
      .attr('fill', color[0])
      .attr('transform', `rotate(180, ${i * 100 + 150} 85)`)
      .text(() => d);
  });

  // bottom
  xdata.forEach((d, i) => {
    gborder
      .append('text')
      .attr('x', () => i * 100 + 150)
      .attr('y', 920)
      .attr('fill', color[0])
      .text(() => d);
  });

  // left
  ydata.forEach((d, i) => {
    gborder
      .append('text')
      .attr('x', 80)
      .attr('y', () => i * 100 + 150)
      .attr('fill', color[0])
      .text(() => d);
  });

  // right
  ydata.forEach((d, i) => {
    gborder
      .append('text')
      .attr('x', 910)
      .attr('y', () => i * 100 + 150)
      .attr('fill', color[0])
      .attr('transform', `rotate(180, 915 ${i * 100 + 150})`)
      .text(() => d);
  });


  g.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('stroke-width', '2')
    .attr('x', d => d.x * cellWidth)
    .attr('y', d => d.y * cellWidth)
    .attr('width', cellWidth)
    .attr('height', cellWidth)
    .attr('fill', (d, i) => {
      // return 'none'
      if (Math.floor(i / 8) % 2 === 0) {
        return i % 2 === 0 ? color[0] : color[1];
      }
      return i % 2 === 0 ? color[1] : color[0];
    });
}

export default {
  name: 'demo',
  mounted() {
    start(this.$d3);
  },
};
</script>
<style type="text/css">
#svg {
  background: #fff;
  border: solid 1px red;
}
</style>
