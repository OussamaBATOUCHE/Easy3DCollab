import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dvh',
  templateUrl: './dvh.component.html',
  styleUrls: ['./dvh.component.scss']
})
export class DvhComponent implements OnInit {
  public lineChartData:{}[] = [
    { data: [{'x': 0.0, 'y': 100.0},
        {'x': 2.400000000000001, 'y': 100.0},
        {'x': 3.5000000000000018, 'y': 99.64701992086074},
        {'x': 4.4, 'y': 99.11373437503542},
        {'x': 5.1999999999999975, 'y': 98.61105493852124},
        {'x': 5.999999999999995, 'y': 97.6838369232042},
        {'x': 6.8999999999999915, 'y': 96.31293199032899},
        {'x': 7.799999999999988, 'y': 95.01928368240647},
        {'x': 8.299999999999986, 'y': 94.31908591159565},
        {'x': 10.999999999999977, 'y': 91.06701696543286},
        {'x': 13.299999999999969, 'y': 88.4514148194409},
        {'x': 14.599999999999966, 'y': 86.70760745273896},
        {'x': 15.59999999999996, 'y': 84.98984983088863},
        {'x': 16.399999999999963, 'y': 83.19889379858179},
        {'x': 16.499999999999964, 'y': 82.93528791333688},
        {'x': 17.399999999999977, 'y': 80.25535541985444},
        {'x': 18.29999999999999, 'y': 76.90006667949174},
        {'x': 19.900000000000013, 'y': 69.71591318984505},
        {'x': 20.700000000000024, 'y': 66.20168631323281},
        {'x': 21.00000000000003, 'y': 64.86317282086739},
        {'x': 21.70000000000004, 'y': 61.426427572699524},
        {'x': 22.100000000000044, 'y': 59.32414463842897},
        {'x': 23.400000000000066, 'y': 51.22217545045893},
        {'x': 23.700000000000067, 'y': 49.26889805975467},
        {'x': 24.00000000000007, 'y': 47.34010988695582},
        {'x': 24.500000000000078, 'y': 44.01427726798674},
        {'x': 25.700000000000095, 'y': 36.83484866848259},
        {'x': 25.900000000000098, 'y': 35.78790718434768},
        {'x': 26.400000000000105, 'y': 33.291773070039426},
        {'x': 26.600000000000108, 'y': 32.36687737020437},
        {'x': 26.900000000000112, 'y': 31.06199083942947},
        {'x': 27.200000000000117, 'y': 29.866395376000117},
        {'x': 28.50000000000013, 'y': 25.304055527740232},
        {'x': 30.000000000000156, 'y': 20.982690487916585},
        {'x': 31.200000000000173, 'y': 18.114510338114712},
        {'x': 32.30000000000019, 'y': 15.779475835063101},
        {'x': 32.40000000000019, 'y': 15.582320920390982},
        {'x': 33.2000000000002, 'y': 14.040184376966211},
        {'x': 34.200000000000216, 'y': 12.208433502977181},
        {'x': 35.20000000000023, 'y': 10.488242444407797},
        {'x': 36.40000000000025, 'y': 8.710397533311777},
        {'x': 37.700000000000266, 'y': 7.111800497200455},
        {'x': 39.000000000000284, 'y': 5.714705578575544},
        {'x': 40.400000000000304, 'y': 4.317562681352702},
        {'x': 41.60000000000032, 'y': 3.1422260637774584},
        {'x': 42.70000000000034, 'y': 2.0629315012953158},
        {'x': 43.60000000000035, 'y': 1.195632734465815},
        {'x': 44.40000000000036, 'y': 0.47861649366566356},
        {'x': 45.300000000000374, 'y': 0.014913723630386089},
        {'x': 46.60000000000039, 'y': 0.0}], label: 'Series A' }
  ];
  options = {
    scales: {
      xAxes: [{
        type: 'linear',
        // ...
      }]
    }
  }
  public lineChartLabels = [0.0,
    2.400000000000001,
    3.5000000000000018,
    4.4,
    5.1999999999999975,
    5.999999999999995,
    6.8999999999999915,
    7.799999999999988,
    8.299999999999986,
    10.999999999999977,
    13.299999999999969,
    14.599999999999966,
    15.59999999999996,
    16.399999999999963,
    16.499999999999964,
    17.399999999999977,
    18.29999999999999,
    19.900000000000013,
    20.700000000000024,
    21.00000000000003,
    21.70000000000004,
    22.100000000000044,
    23.400000000000066,
    23.700000000000067,
    24.00000000000007,
    24.500000000000078,
    25.700000000000095,
    25.900000000000098,
    26.400000000000105,
    26.600000000000108,
    26.900000000000112,
    27.200000000000117,
    28.50000000000013,
    30.000000000000156,
    31.200000000000173,
    32.30000000000019,
    32.40000000000019,
    33.2000000000002,
    34.200000000000216,
    35.20000000000023,
    36.40000000000025,
    37.700000000000266,
    39.000000000000284,
    40.400000000000304,
    41.60000000000032,
    42.70000000000034,
    43.60000000000035,
    44.40000000000036,
    45.300000000000374,
    46.60000000000039];

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }
}
