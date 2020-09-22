import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as dc from 'dc';
import * as crossfilter from 'crossfilter';
import * as chartData from '../assets/chartData.json';
import * as mockData from '../assets/mockData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'scatterplot';
  products: any = (chartData as any).default;
  experiments: any = (mockData as any).default;

  ngOnInit() {
    console.log(this.products);

    dc.config.defaultColors(d3.schemeSet1);

    var chart = dc.scatterPlot('#scatter');

    var speedlist = [];
    var i = 0;
    this.experiments.forEach(function (x) {
      x.Speed = +x.Speed;
      speedlist[i++] = x.Speed;
    });
    var min = Math.min(...speedlist);
    var max = Math.max(...speedlist);
    var ndx = crossfilter(this.experiments),
      runDimension = ndx.dimension(function (d) {
        return [+d.Speed, +d.Expt];
      }),
      speedSumGroup = runDimension.group();

    chart
      .width(500)
      .height(400)
      .renderHorizontalGridLines(true)
      .renderVerticalGridLines(true)
      .x(d3.scaleLinear().domain([min - 10, max + 10]))
      .colorAccessor(function (d: any, i: any) {
        let speed = d.key[0];
        let expt = d.key[1];
        if (speed > 900 && expt > 3) return 'outlier';
        else return 'normal';
      })
      .brushOn(false)
      .symbolSize(10)
      .clipPadding(0)
      .xAxisLabel('Speed', 20)
      .yAxisLabel('EXPT')
      .dimension(runDimension)
      .group(speedSumGroup)
      .colors(
        d3.scaleOrdinal().domain(['normal', 'outlier']).range(['yellow', 'red'])
      )
      .on('renderlet', function (chart) {
        // rotate x-axis labels
        chart
          .selectAll('g.x text')
          .attr('transform', 'translate(-10,10) rotate(315)');
      });
    chart.render();
  }
}
