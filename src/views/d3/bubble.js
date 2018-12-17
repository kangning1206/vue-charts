// URL: https://beta.observablehq.com/@mbostock/d3-box-plot
// Title: D3 Box Plot
// Author: Mike Bostock (@mbostock)
// Version: 192
// Runtime version: 1

const m0 = {
  id: '7536f1d9930dde80@192',
  variables: [{
    inputs: ['md'],
    value(md) {
      return (
        md`#ddd`
      );
    },
  },
  {
    name: 'chart',
    inputs: ['d3', 'DOM', 'width', 'height', 'bins', 'x', 'y', 'xAxis', 'yAxis'],
    value(d3, DOM, width, height, bins, x, y, xAxis, yAxis) {
      const svg = d3.select(DOM.svg(width, height));

      const g = svg.append('g')
        .selectAll('g')
        .data(bins)
        .enter()
        .append('g');

      g.append('path')
        .attr('stroke', 'currentColor')
        .attr('d', d => `
        M${x((d.x0 + d.x1) / 2)},${y(d.range[1])}
        V${y(d.range[0])}
      `);

      g.append('path')
        .attr('fill', '#ddd')
        .attr('d', d => `
        M${x(d.x0) + 1},${y(d.quartiles[2])}
        H${x(d.x1)}
        V${y(d.quartiles[0])}
        H${x(d.x0) + 1}
        Z
      `);

      g.append('path')
        .attr('stroke', 'currentColor')
        .attr('stroke-width', 2)
        .attr('d', d => `
        M${x(d.x0) + 1},${y(d.quartiles[1])}
        H${x(d.x1)}
      `);

      g.append('g')
        .attr('fill', 'currentColor')
        .attr('fill-opacity', 0.2)
        .attr('stroke', 'none')
        .attr('transform', d => `translate(${x((d.x0 + d.x1) / 2)},0)`)
        .selectAll('circle')
        .data(d => d.outliers)
        .enter()
        .append('circle')
        .attr('r', 2)
        .attr('cx', () => (Math.random() - 0.5) * 4)
        .attr('cy', d => y(d.y));

      svg.append('g')
        .call(xAxis);

      svg.append('g')
        .call(yAxis);

      return svg.node();
    },
  },
  {
    name: 'bins',
    inputs: ['d3', 'n', 'data'],
    value(d3, n, data) {
      return (
        d3.histogram()
          .thresholds(n)
          .value(d => d.x)(data)
          .map((bin) => {
            bin.sort((a, b) => a.y - b.y);
            const values = bin.map(d => d.y);
            const min = values[0];
            const max = values[values.length - 1];
            const q1 = d3.quantile(values, 0.25);
            const q2 = d3.quantile(values, 0.50);
            const q3 = d3.quantile(values, 0.75);
            const iqr = q3 - q1; // interquartile range
            const r0 = Math.max(min, q1 - iqr * 1.5);
            const r1 = Math.min(max, q3 + iqr * 1.5);
            bin.quartiles = [q1, q2, q3];
            bin.range = [r0, r1];
            bin.outliers = bin.filter(v => v.y < r0 || v.y > r1); // TODO
            return bin;
          })
      );
    },
  },
  {
    name: 'data',
    inputs: ['d3'],
    value(d3) {
      return (
        d3.csv('https://gist.githubusercontent.com/mbostock/d63e6019c63887e39e44646696abfb69/raw/5b2b15b4c652167f6c038e717bbe3385dbb9bb99/diamonds.csv', ({ carat, price }) => ({ x: +carat, y: +price }))
      );
    },
  },
  {
    name: 'x',
    inputs: ['d3', 'bins', 'margin', 'width'],
    value(d3, bins, margin, width) {
      return (
        d3.scaleLinear()
          .domain([d3.min(bins, d => d.x0), d3.max(bins, d => d.x1)])
          .rangeRound([margin.left, width - margin.right])
      );
    },
  },
  {
    name: 'y',
    inputs: ['d3', 'bins', 'height', 'margin'],
    value(d3, bins, height, margin) {
      return (
        d3.scaleLinear()
          .domain([d3.min(bins, d => d.range[0]), d3.max(bins, d => d.range[1])]).nice()
          .range([height - margin.bottom, margin.top])
      );
    },
  },
  {
    name: 'xAxis',
    inputs: ['height', 'margin', 'd3', 'x', 'n'],
    value(height, margin, d3, x, n) {
      return (
        g => g
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x).ticks(n).tickSizeOuter(0))
      );
    },
  },
  {
    name: 'yAxis',
    inputs: ['margin', 'd3', 'y'],
    value(margin, d3, y) {
      return (
        g => g
          .attr('transform', `translate(${margin.left},0)`)
          .call(d3.axisLeft(y).ticks(null, 's'))
          .call(g => g.select('.domain').remove())
      );
    },
  },
  {
    name: 'n',
    inputs: ['width'],
    value(width) {
      return (
        width / 40
      );
    },
  },
  {
    name: 'height',
    value() {
      return (
        600
      );
    },
  },
  {
    name: 'margin',
    value() {
      return ({
        top: 20, right: 20, bottom: 30, left: 40,
      });
    },
  },
  {
    name: 'd3',
    inputs: ['require'],
    value(require) {
      return (
        require('d3@5')
      );
    },
  },
  ],
};

const notebook = {
  id: '7536f1d9930dde80@192',
  modules: [m0],
};

export default notebook;
