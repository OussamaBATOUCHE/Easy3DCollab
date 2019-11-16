import { Component, OnInit } from '@angular/core';
import {TreatmentSceneControlsControllerService} from '../treatment-scene-controls-controller.service';

@Component({
  selector: 'app-cad-controls',
  templateUrl: './treatment-controls.component.html',
  styleUrls: ['./treatment-controls.component.scss']
})
export class TreatmentControlsComponent implements OnInit {
  isPartSelected = false;
  onSceneEventSubscriber;
  constructor(private cadSceneControlsController: TreatmentSceneControlsControllerService) { }
  ngOnInit() {
    this.onSceneEventSubscriber = this.cadSceneControlsController.toControls.subscribe((data) => this.onSceneEvent(data));
  }
  onSceneEvent(data) {
    console.log(data)
  }

}
