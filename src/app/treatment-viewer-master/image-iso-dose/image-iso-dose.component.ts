import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-image-iso-dose',
  templateUrl: './image-iso-dose.component.html',
  styleUrls: ['./image-iso-dose.component.scss']
})
export class ImageIsoDoseComponent implements OnInit {
  @Input('patientId') patientId: string;
  @Input('planId') planId: string;
  value = 1;
  options: Options = {
    floor: 1,
    ceil: 99
  };
  test = 'https://junction-planreview.azurewebsites.net/api/patients/' + this.patientId + '/plans/' + this.planId + '/RenderedBitmaps/';
  constructor() { }

  ngOnInit() {
    this.test = 'https://junction-planreview.azurewebsites.net/api/patients/' + this.patientId + '/plans/' + this.planId + '/RenderedBitmaps/';

    console.log(this.test);
    for (let i = 1; i <= 100; i++) {

      this.value = i;
    }
    this.value = 1;
  }


  goToSlice(event) {
    this.value = event;
  }
}
