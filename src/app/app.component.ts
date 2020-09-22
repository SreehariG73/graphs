import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as dc from 'dc';
import * as crossfilter from 'crossfilter';
import { scatterplotdata } from './utilities/chartdata';
import { iif } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scatterplot';
  experiments = [
    {
      "": "001",
      "Expt": 1,
      "Run": 1,
      "Speed": 850
    },
    {
      "": "002",
      "Expt": 1,
      "Run": 2,
      "Speed": 740
    },
    {
      "": "003",
      "Expt": 1,
      "Run": 3,
      "Speed": 900
    },
    {
      "": "004",
      "Expt": 1,
      "Run": 4,
      "Speed": 1070
    },
    {
      "": "005",
      "Expt": 1,
      "Run": 5,
      "Speed": 930
    },
    {
      "": "006",
      "Expt": 1,
      "Run": 6,
      "Speed": 850
    },
    {
      "": "007",
      "Expt": 1,
      "Run": 7,
      "Speed": 950
    },
    {
      "": "008",
      "Expt": 1,
      "Run": 8,
      "Speed": 980
    },
    {
      "": "009",
      "Expt": 1,
      "Run": 9,
      "Speed": 980
    },
    {
      "": "010",
      "Expt": 1,
      "Run": 10,
      "Speed": 880
    },
    {
      "": "011",
      "Expt": 1,
      "Run": 11,
      "Speed": 1000
    },
    {
      "": "012",
      "Expt": 1,
      "Run": 12,
      "Speed": 980
    },
    {
      "": "013",
      "Expt": 1,
      "Run": 13,
      "Speed": 930
    },
    {
      "": "014",
      "Expt": 1,
      "Run": 14,
      "Speed": 650
    },
    {
      "": "015",
      "Expt": 1,
      "Run": 15,
      "Speed": 760
    },
    {
      "": "016",
      "Expt": 1,
      "Run": 16,
      "Speed": 810
    },
    {
      "": "017",
      "Expt": 1,
      "Run": 17,
      "Speed": 1000
    },
    {
      "": "018",
      "Expt": 1,
      "Run": 18,
      "Speed": 1000
    },
    {
      "": "019",
      "Expt": 1,
      "Run": 19,
      "Speed": 960
    },
    {
      "": "020",
      "Expt": 1,
      "Run": 20,
      "Speed": 960
    },
    {
      "": "021",
      "Expt": 2,
      "Run": 1,
      "Speed": 960
    },
    {
      "": "022",
      "Expt": 2,
      "Run": 2,
      "Speed": 940
    },
    {
      "": "023",
      "Expt": 2,
      "Run": 3,
      "Speed": 960
    },
    {
      "": "024",
      "Expt": 2,
      "Run": 4,
      "Speed": 940
    },
    {
      "": "025",
      "Expt": 2,
      "Run": 5,
      "Speed": 880
    },
    {
      "": "026",
      "Expt": 2,
      "Run": 6,
      "Speed": 800
    },
    {
      "": "027",
      "Expt": 2,
      "Run": 7,
      "Speed": 850
    },
    {
      "": "028",
      "Expt": 2,
      "Run": 8,
      "Speed": 880
    },
    {
      "": "029",
      "Expt": 2,
      "Run": 9,
      "Speed": 900
    },
    {
      "": "030",
      "Expt": 2,
      "Run": 10,
      "Speed": 840
    },
    {
      "": "031",
      "Expt": 2,
      "Run": 11,
      "Speed": 830
    },
    {
      "": "032",
      "Expt": 2,
      "Run": 12,
      "Speed": 790
    },
    {
      "": "033",
      "Expt": 2,
      "Run": 13,
      "Speed": 810
    },
    {
      "": "034",
      "Expt": 2,
      "Run": 14,
      "Speed": 880
    },
    {
      "": "035",
      "Expt": 2,
      "Run": 15,
      "Speed": 880
    },
    {
      "": "036",
      "Expt": 2,
      "Run": 16,
      "Speed": 830
    },
    {
      "": "037",
      "Expt": 2,
      "Run": 17,
      "Speed": 800
    },
    {
      "": "038",
      "Expt": 2,
      "Run": 18,
      "Speed": 790
    },
    {
      "": "039",
      "Expt": 2,
      "Run": 19,
      "Speed": 760
    },
    {
      "": "040",
      "Expt": 2,
      "Run": 20,
      "Speed": 800
    },
    {
      "": "041",
      "Expt": 3,
      "Run": 1,
      "Speed": 880
    },
    {
      "": "042",
      "Expt": 3,
      "Run": 2,
      "Speed": 880
    },
    {
      "": "043",
      "Expt": 3,
      "Run": 3,
      "Speed": 880
    },
    {
      "": "044",
      "Expt": 3,
      "Run": 4,
      "Speed": 860
    },
    {
      "": "045",
      "Expt": 3,
      "Run": 5,
      "Speed": 720
    },
    {
      "": "046",
      "Expt": 3,
      "Run": 6,
      "Speed": 720
    },
    {
      "": "047",
      "Expt": 3,
      "Run": 7,
      "Speed": 620
    },
    {
      "": "048",
      "Expt": 3,
      "Run": 8,
      "Speed": 860
    },
    {
      "": "049",
      "Expt": 3,
      "Run": 9,
      "Speed": 970
    },
    {
      "": "050",
      "Expt": 3,
      "Run": 10,
      "Speed": 950
    },
    {
      "": "051",
      "Expt": 3,
      "Run": 11,
      "Speed": 880
    },
    {
      "": "052",
      "Expt": 3,
      "Run": 12,
      "Speed": 910
    },
    {
      "": "053",
      "Expt": 3,
      "Run": 13,
      "Speed": 850
    },
    {
      "": "054",
      "Expt": 3,
      "Run": 14,
      "Speed": 870
    },
    {
      "": "055",
      "Expt": 3,
      "Run": 15,
      "Speed": 840
    },
    {
      "": "056",
      "Expt": 3,
      "Run": 16,
      "Speed": 840
    },
    {
      "": "057",
      "Expt": 3,
      "Run": 17,
      "Speed": 850
    },
    {
      "": "058",
      "Expt": 3,
      "Run": 18,
      "Speed": 840
    },
    {
      "": "059",
      "Expt": 3,
      "Run": 19,
      "Speed": 840
    },
    {
      "": "060",
      "Expt": 3,
      "Run": 20,
      "Speed": 840
    },
    {
      "": "061",
      "Expt": 4,
      "Run": 1,
      "Speed": 890
    },
    {
      "": "062",
      "Expt": 4,
      "Run": 2,
      "Speed": 810
    },
    {
      "": "063",
      "Expt": 4,
      "Run": 3,
      "Speed": 810
    },
    {
      "": "064",
      "Expt": 4,
      "Run": 4,
      "Speed": 820
    },
    {
      "": "065",
      "Expt": 4,
      "Run": 5,
      "Speed": 800
    },
    {
      "": "066",
      "Expt": 4,
      "Run": 6,
      "Speed": 770
    },
    {
      "": "067",
      "Expt": 4,
      "Run": 7,
      "Speed": 760
    },
    {
      "": "068",
      "Expt": 4,
      "Run": 8,
      "Speed": 740
    },
    {
      "": "069",
      "Expt": 4,
      "Run": 9,
      "Speed": 750
    },
    {
      "": "070",
      "Expt": 4,
      "Run": 10,
      "Speed": 760
    },
    {
      "": "071",
      "Expt": 4,
      "Run": 11,
      "Speed": 910
    },
    {
      "": "072",
      "Expt": 4,
      "Run": 12,
      "Speed": 920
    },
    {
      "": "073",
      "Expt": 4,
      "Run": 13,
      "Speed": 890
    },
    {
      "": "074",
      "Expt": 4,
      "Run": 14,
      "Speed": 860
    },
    {
      "": "075",
      "Expt": 4,
      "Run": 15,
      "Speed": 880
    },
    {
      "": "076",
      "Expt": 4,
      "Run": 16,
      "Speed": 720
    },
    {
      "": "077",
      "Expt": 4,
      "Run": 17,
      "Speed": 840
    },
    {
      "": "078",
      "Expt": 4,
      "Run": 18,
      "Speed": 850
    },
    {
      "": "079",
      "Expt": 4,
      "Run": 19,
      "Speed": 850
    },
    {
      "": "080",
      "Expt": 4,
      "Run": 20,
      "Speed": 780
    },
    {
      "": "081",
      "Expt": 5,
      "Run": 1,
      "Speed": 890
    },
    {
      "": "082",
      "Expt": 5,
      "Run": 2,
      "Speed": 840
    },
    {
      "": "083",
      "Expt": 5,
      "Run": 3,
      "Speed": 780
    },
    {
      "": "084",
      "Expt": 5,
      "Run": 4,
      "Speed": 810
    },
    {
      "": "085",
      "Expt": 5,
      "Run": 5,
      "Speed": 760
    },
    {
      "": "086",
      "Expt": 5,
      "Run": 6,
      "Speed": 810
    },
    {
      "": "087",
      "Expt": 5,
      "Run": 7,
      "Speed": 790
    },
    {
      "": "088",
      "Expt": 5,
      "Run": 8,
      "Speed": 810
    },
    {
      "": "089",
      "Expt": 5,
      "Run": 9,
      "Speed": 820
    },
    {
      "": "090",
      "Expt": 5,
      "Run": 10,
      "Speed": 850
    },
    {
      "": "091",
      "Expt": 5,
      "Run": 11,
      "Speed": 870
    },
    {
      "": "092",
      "Expt": 5,
      "Run": 12,
      "Speed": 870
    },
    {
      "": "093",
      "Expt": 5,
      "Run": 13,
      "Speed": 810
    },
    {
      "": "094",
      "Expt": 5,
      "Run": 14,
      "Speed": 740
    },
    {
      "": "095",
      "Expt": 5,
      "Run": 15,
      "Speed": 810
    },
    {
      "": "096",
      "Expt": 5,
      "Run": 16,
      "Speed": 940
    },
    {
      "": "097",
      "Expt": 5,
      "Run": 17,
      "Speed": 950
    },
    {
      "": "098",
      "Expt": 5,
      "Run": 18,
      "Speed": 800
    },
    {
      "": "099",
      "Expt": 5,
      "Run": 19,
      "Speed": 810
    },
    {
      "": 100,
      "Expt": 5,
      "Run": 20,
      "Speed": 870
    }
  ]
  ngOnInit() {
    var chart = dc.scatterPlot("#scatter");
    var speedlist = [];
    var i = 0;
    this.experiments.forEach(function (x) {
      x.Speed = +x.Speed;
      speedlist[i++] = x.Speed;
    });
    var min = Math.min(...speedlist);
    var max = Math.max(...speedlist);
    var ndx = crossfilter(this.experiments),
      runDimension = ndx.dimension(function (d) { return [+d.Speed, +d.Expt]; }),
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
        if (speed > 900 && expt > 3)
          return "outlier";
        else
          return "normal";
      })
      .brushOn(false)
      .symbolSize(10)
      .clipPadding(0)
      .xAxisLabel("Speed", 20)
      .yAxisLabel("EXPT")
      .dimension(runDimension)
      .group(speedSumGroup)
      .colors(d3.scaleOrdinal().domain(["normal", "outlier"])
        .range(["yellow", "red"]));
    chart.renderlet(function (chart) {
      // rotate x-axis labels
      chart.selectAll('g.x text')
        .attr('transform', 'translate(-10,10) rotate(315)');
    });
    chart.render();
  }
}
