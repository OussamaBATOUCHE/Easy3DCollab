import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartData} from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import {VarianApiService} from '../../shared/services/varian-api.service';

@Component({
  selector: 'app-dvh',
  templateUrl: './dvh.component.html',
  styleUrls: ['./dvh.component.scss']
})
export class DvhComponent implements OnInit, AfterViewInit {
    @Input()patientId;
    @Input()planId;
    @ViewChild('testchart', {'static': false}) htmlChart;
    mychart: Chart;
    value = '';
  public lineChartData: {}[] = [  ];
  options = {
    scales: {
      xAxes: [{
        type: 'linear',
        // ...
      }]
    },
      tooltips: {
          mode: 'point'
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

  constructor(private varianApiService: VarianApiService) { }

  ngOnInit() {

      const rawData = []
      this.varianApiService.getDvHCurves(this.patientId, this.planId).subscribe(result => {
          result.forEach(curveName => {
              this.varianApiService.getDvHCurve(this.patientId, this.planId, curveName).subscribe(
                  data => {
                      // this.mychart.data.datasets.push(this.transformRawData(data));
                      this.lineChartData.push(this.transformRawData(data))}

              )
          })
      })
      console.log(this.htmlChart)
  }
  ngAfterViewInit(): void {

      console.log(this.htmlChart)

  }

    transformRawData(rawData) {
      const curvePoints = [];
      const data = {};
      rawData['CurvePoints'].forEach(point => curvePoints.push({x: point['Dose'], y: point['Volume']}))
      data['label'] = rawData['Id'];
      data['data'] = curvePoints;
      console.log(data);
      data['fill'] = false;
      data['borderColor'] = this.getRandomColor();
      return data;
  }
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color2 = '#';
        for (let i = 0; i < 6; i++) {
            color2 += letters[Math.floor(Math.random() * 16)];
        }

        return color2;
    }
  onChartClick(event: any): void {
      const clickx = event.event.layerX
      const clicky = event.event.layerY
      let minDist = 1000000;
      let smallest: rgbColor;

      for (let i = 0; i < event.active.length; i++) {
          const dist = ((event.active[i]._model.x - clickx) ** 2) + ((event.active[i]._model.y - clicky) ** 2);

          if (dist < minDist) {
              minDist = dist;
              smallest = event.active[i]['_options']['borderColor']
              //smallest = this.stringToRgb(event.active[i]._options.borderColor);
             // smallest = this.rgbToHex(smallest[0],smallest[1],smallest[2]);
          }

      }


      console.log(smallest);

      for(let x=0;x<this.lineChartData.length;x++){
          console.log(this.lineChartData[x]['borderColor'])
          if(this.lineChartData[x]['borderColor']===smallest){
              console.log(this.lineChartData[x]['label'])
              this.value = this.lineChartData[x]['label'];
          }
      }
     }
    componentToHex(c) {
        c = 1*c;
        console.log(typeof c);
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

     rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
    stringToRgb(rgbstring:string) {
        rgbstring = rgbstring.replace('rgb(','');
        rgbstring = rgbstring.replace(')','');
        return rgbstring.split(',')
    }
}
