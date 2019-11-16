import {Component, OnDestroy, OnInit} from '@angular/core';
import {TreatmentSceneControlsControllerService} from './treatment-scene-controls-controller.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cad-viewer',
  templateUrl: './treatment-viewer.component.html',
  styleUrls: ['./treatment-viewer.component.scss']
})
export class TreatmentViewerComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
  }
}
