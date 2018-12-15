<template>
  <div>
    <div id="chart">
      <svg style="width:600px;height:600px;" ></svg>
    </div>
  </div>
</template>
<script type="text/javascript">


function viz(data, d3) {
  const depthScale = d3.scaleOrdinal()
    .range(['#548687', '#FFFFC7', '#473335', '#93c464', '#75739F']);


  function highlightCircle(d) {
    d3.selectAll('circle').style('fill', p => (p.x === d.x && p.y === d.y ? 'coral' : depthScale(p.depth)));
    d3.selectAll('circle').style('opacity', (p) => {
      if (p.height === 0) {
        return p.x === d.x && p.y === d.y ? 1 : 0.8;
      }
    });
  }

  function deHighlightCircle() {
    d3.selectAll('circle').style('fill', d => depthScale(d.depth));
    d3.selectAll('circle').style('opacity', 1);
  }

  const nestedTweets = d3.nest()
    .key(d => d.user)
    .entries(data.tweets);

  const packableTweets = { id: 'All Tweets', values: nestedTweets };
  const packChart = d3.pack();

  packChart.padding(8);

  packChart.size([500, 500]);

  const root = d3.hierarchy(packableTweets, d => d.values)
    .sum(d => (d.retweets ? d.retweets.length + d.favorites.length + 1 : undefined));

  d3.select('svg')
    .append('g')
    .attr('transform', 'translate(100,20)')
    .selectAll('circle')
    .data(packChart(root).descendants())
    .enter()
    .append('circle')
    .attr('r', d => d.r)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .style('fill', d => depthScale(d.depth))
    .style('stroke', 'black');

  d3.selectAll('circle')
    .filter(d => d.height === 0)
    .on('mouseover', highlightCircle)
    .on('mouseout', deHighlightCircle);
}

function start(d3) {
  d3.json('/data/tweets.json').then((data) => {
    viz(data, d3);
  });
}

export default {
  name: 'd3circle',
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
