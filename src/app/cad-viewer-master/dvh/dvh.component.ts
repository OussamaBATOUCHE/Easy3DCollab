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
        {'x': 46.60000000000039, 'y': 0.0}], label: 'Series A' },
      {data: [{'x': 0.0, 'y': 99.99999999999999},
              {'x': 7.799999999999988, 'y': 99.99999999999999},
              {'x': 8.499999999999986, 'y': 99.99999999999999},
              {'x': 9.599999999999982, 'y': 99.90979282236454},
              {'x': 10.29999999999998, 'y': 99.10456220814659},
              {'x': 10.899999999999977, 'y': 98.15516913851275},
              {'x': 11.499999999999975, 'y': 97.18976584466895},
              {'x': 11.999999999999973, 'y': 96.3986313314619},
              {'x': 12.599999999999971, 'y': 95.30898439006866},
              {'x': 13.099999999999968, 'y': 94.19833168683397},
              {'x': 13.699999999999967, 'y': 92.70066575136876},
              {'x': 14.399999999999963, 'y': 90.74860953513797},
              {'x': 15.39999999999996, 'y': 87.68217965492585},
              {'x': 15.59999999999996, 'y': 86.97453068662087},
              {'x': 16.499999999999964, 'y': 83.30449831446846},
              {'x': 16.599999999999966, 'y': 82.8024860079035},
              {'x': 18.39999999999999, 'y': 72.10206196839653},
              {'x': 19.300000000000004, 'y': 66.37108554436274},
              {'x': 20.50000000000002, 'y': 58.86268065322796},
              {'x': 22.000000000000043, 'y': 51.633778176562146},
              {'x': 22.60000000000005, 'y': 49.364160023615405},
              {'x': 23.20000000000006, 'y': 47.35960201188386},
              {'x': 23.400000000000063, 'y': 46.721191188441914},
              {'x': 24.300000000000075, 'y': 44.0160411686291},
              {'x': 25.000000000000085, 'y': 41.37772189854771},
              {'x': 25.200000000000088, 'y': 40.520242841970855},
              {'x': 26.300000000000104, 'y': 35.366931117130676},
              {'x': 27.000000000000114, 'y': 32.372179914990184},
              {'x': 27.50000000000012, 'y': 30.193956321279952},
              {'x': 27.600000000000122, 'y': 29.800428934529634},
              {'x': 28.80000000000014, 'y': 25.37439181901277},
              {'x': 30.100000000000158, 'y': 21.09350457998657},
              {'x': 31.100000000000172, 'y': 18.056624668101293},
              {'x': 31.200000000000173, 'y': 17.770711506219858},
              {'x': 32.000000000000185, 'y': 15.60966331386047},
              {'x': 32.100000000000186, 'y': 15.367430559130188},
              {'x': 33.1000000000002, 'y': 12.992172157663878},
              {'x': 34.30000000000022, 'y': 10.509933373360107},
              {'x': 35.600000000000236, 'y': 8.264459413432641},
              {'x': 36.80000000000025, 'y': 6.395650110987643},
              {'x': 37.90000000000027, 'y': 4.941058235659172},
              {'x': 38.90000000000028, 'y': 3.6875088079831104},
              {'x': 39.000000000000284, 'y': 3.5698710233479876},
              {'x': 39.800000000000296, 'y': 2.6891599731473996},
              {'x': 40.70000000000031, 'y': 1.8266353237651565},
              {'x': 41.70000000000032, 'y': 1.0450919843288717},
              {'x': 42.70000000000034, 'y': 0.6224877367930989},
              {'x': 44.10000000000036, 'y': 0.19803726918656467},
              {'x': 46.30000000000039, 'y': 0.0}],label:'Rectum'}
  ];
  options = {
    scales: {
      xAxes: [{
        type: 'linear',
        // ...
      }]
    }
  }

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
