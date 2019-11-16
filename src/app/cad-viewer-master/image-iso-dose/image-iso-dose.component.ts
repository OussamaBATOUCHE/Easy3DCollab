import {Component, OnChanges, OnInit} from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-image-iso-dose',
  templateUrl: './image-iso-dose.component.html',
  styleUrls: ['./image-iso-dose.component.scss']
})
export class ImageIsoDoseComponent implements OnInit, OnChanges {
  value: number = 1;
  options: Options = {
    floor: 1,
    ceil: 99
  };
  test = 'https://junction-planreview.azurewebsites.net//api/patients/Head_Neck/plans/JSu-IM101/RenderedBitmaps/';
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=100;i++){

      this.value = i;
    }
    this.value = 1;
  }
  onClick(){
    this.test = 'https://junction-planreview.azurewebsites.net//api/patients/Head_Neck/plans/JSu-IM101/RenderedBitmaps/' + this.value;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.onClick();
  }
  goToSlice(event) {
    this.value=event;
  }
}
