import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as dc from 'dc';
import * as crossfilter from 'crossfilter';
import regression from 'regression';
import { MixedService } from './mixed.service';

@Component({
  selector: 'app-mixedscatter',
  templateUrl: './mixedscatter.component.html',
  styleUrls: ['./mixedscatter.component.css']
})
export class MixedscatterComponent implements OnInit {
  height = 500;
  constructor(private service: MixedService) { }

  ngOnInit(): void {
    var graphdiv = document.getElementById("test")
    var w = graphdiv.offsetWidth;
    this.service.getAlldata().subscribe((data) => {
      this.drawchart(data, w, this.height);
    })

  }
  drawchart(data, width, height) {
    var chart = new dc.ScatterPlot("#test");
    var xRange = [];
    var yRange = [];
    data.forEach(function (x) {
      xRange.push(x.Salary);
      yRange.push(x.Provident_Fund);
    });
    var minXaxis = Math.min(...xRange);
    var maxXaxis = Math.max(...xRange);
    var minYaxis = Math.min(...yRange);
    var maxYaxis = Math.max(...yRange);

    const cf = crossfilter(data);

    chart
      .width(width)
      .height(height)
      .margins({ top: 20, right: 50, bottom: 30, left: 50 })
      .renderHorizontalGridLines(true)
      .renderVerticalGridLines(true)
      .x(d3.scaleLinear().domain([minXaxis - 100, maxXaxis + 100]))
      .y(d3.scaleLinear().domain([minYaxis - 100, maxYaxis + 100]))
      .xAxisLabel("Salary")
      .yAxisLabel("Provident_Fund")
      .brushOn(false)
      .symbolSize(10)
      .colors(
        d3.scaleOrdinal().range(['#8d93ab'])
      )
      .clipPadding(8);

    chart
      .on('pretransition', function () {
        var xext = d3.extent(chart.group().all(), kv => kv.key[0]);
        var r = regression.linear(chart.group().all().map(kv => [kv.key[0], kv.key[1]])),
          m = r.equation[0], b = r.equation[1],
          [x1, x2] = chart.x().domain();
        var points = [[
          x1,
          m * x1 + b
        ], [
          x2,
          m * x2 + b
        ]];
        var xScale = chart.x(), yScale = chart.y(), margins = chart.margins();
        var line = chart.g().selectAll('line.regression').data([points]);
        function do_points(line) {
          line
            .attr('x1', d => xScale(d[0][0]) + margins.left)
            .attr('y1', d => yScale(d[0][1]) + margins.top)
            .attr('x2', d => xScale(d[1][0]) + margins.left)
            .attr('y2', d => yScale(d[1][1]) + margins.top)
            .attr("stroke", "red")
            .attr("stroke-width", 5)
            .attr("opacity", 0.5);
        }
        line = line.enter().append('line')
          .attr('class', 'regression')
          .call(do_points)
          .merge(line);
        line.transition().duration(chart.transitionDuration()).call(do_points);
      });


    let runDimension = cf.dimension(d => [d.Salary, d.Provident_Fund]),
      speedSumGroup = runDimension.group();

    chart
      .dimension(runDimension)
      .group(speedSumGroup);

    chart.render();
  }
}
