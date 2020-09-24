import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as dc from 'dc';
import * as crossfilter from 'crossfilter';
import { ScatterService } from './scatter.service';
import * as data from '../../assets/numericOutliersSortByOutlier.json'

@Component({
  selector: 'app-scatterplot',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})
export class ScatterplotComponent implements OnInit {
  constructor(private service: ScatterService) { }
  mockdata: any = (data as any).default;
  ngOnInit(): void {
    var graphdiv = document.getElementById("scatter")
    var width = graphdiv.offsetWidth;
    var height = 500;
    this.drawchart(this.mockdata, width, height);
  }
  drawchart(data, width, height) {
    dc.config.defaultColors(d3.schemeSet1);

    var chart = dc.scatterPlot('#scatter');

    var xlist = [];
    var outlierlist = [];
    var i = 0, j = 0, c = 0;
    data.forEach(function (x) {
      xlist[i++] = x.xAxis;
      outlierlist[j++] = x.outlier;
    });
    var min = Math.min(...xlist);
    var max = Math.max(...xlist);
    var ndx = crossfilter(data),
      runDimension = ndx.dimension(function (d) {
        return [d.xAxis, d.yAxis, d.outlier];
      }),
      speedSumGroup = runDimension.group();

    chart
      .width(width)
      .height(height)
      .renderHorizontalGridLines(true)
      .renderVerticalGridLines(true)
      .x(d3.scaleLinear().domain([min - 50, max + 50]))
      .y(d3.scaleLinear().domain([-50, 700]))
      .colorAccessor(function (d, i) {
        if (d.key[2] == "UPPER") return 'outlier';
        else return 'normal';
      })
      .brushOn(false)
      .symbolSize(10)
      .clipPadding(10)
      .yAxisLabel('Row Value')
      .xAxisLabel('Row Number')
      .dimension(runDimension)
      .group(speedSumGroup)
      .colors(
        d3.scaleOrdinal().domain(['normal', 'outlier']).range(['#8d93ab', '#ff4b5c'])
      )
    // .on('renderlet', function (chart) {
    //   // rotate x-axis labels
    //   chart
    //     .selectAll('g.x text')
    //     .attr('transform', 'translate(-10,10) rotate(315)');
    // });
    chart.render();
  }
}
