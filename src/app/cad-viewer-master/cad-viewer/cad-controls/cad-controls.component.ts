import { Component, OnInit } from '@angular/core';
import {CadSceneControlsControllerService} from '../cad-scene-controls-controller.service';

@Component({
  selector: 'app-cad-controls',
  templateUrl: './cad-controls.component.html',
  styleUrls: ['./cad-controls.component.scss']
})
export class CadControlsComponent implements OnInit {
  isPartSelected = false;
  onSceneEventSubscriber;
  constructor(private cadSceneControlsController: CadSceneControlsControllerService) { }
  ngOnInit() {
    this.onSceneEventSubscriber = this.cadSceneControlsController.toControls.subscribe((data) => this.onSceneEvent(data));
  }
  onSceneEvent(data) {
    console.log(data)
  }

}
