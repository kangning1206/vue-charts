<template>
  <div>
    <div id="chart">
      <svg></svg>
    </div>
  </div>
</template>
<script type="text/javascript">

function start(d3) {
  const width = 500;
  const height = 500;
  const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
  const padding = {
    left: 30, right: 30, top: 20, bottom: 20,
  };
  const rectPadding = 4;

  const svg = d3
    .select('svg')
    .attr('width', width)
    .attr('height', height);

  const xScale = d3
    .scaleBand()
    .domain(d3.range(dataset.length))
    .rangeRound([0, width - padding.left - padding.right]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([height - padding.top - padding.bottom, 0]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .attr('x', (d, i) => (xScale.bandwidth() + xScale.paddingInner()) * i)
    .attr('y', d => yScale(d))
    .attr('height', d => height - padding.top - padding.bottom - yScale(d))
    .attr('width', xScale.bandwidth() - rectPadding)
    .attr('fill', 'green');

  svg
    .selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .attr('x', (d, i) => (xScale.bandwidth() + xScale.paddingInner()) * i)
    .attr('y', d => yScale(d))
    .attr('dx', () => xScale.bandwidth() / 2 - rectPadding)
    .attr('dy', 20)
    .text(d => d);

  svg
    .append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(${padding.left},${height - padding.bottom})`)
    .call(xAxis);
  svg
    .append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(${padding.left},${padding.bottom})`)
    .call(yAxis);

  svg
    .selectAll('rect')
    .on('mouseover', function () {
      d3.select(this)
        .transition()
        .duration(100)
        .attr('fill', 'yellow');
    })
    .on('mouseout', function () {
      d3.select(this)
        .transition()
        .duration(500)
        .attr('fill', 'green');
    });
}

export default {
  name: 'bar',
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
