import {Component, OnDestroy, OnInit} from '@angular/core';
import {CadSceneControlsControllerService} from './cad-scene-controls-controller.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cad-viewer',
  templateUrl: './cad-viewer.component.html',
  styleUrls: ['./cad-viewer.component.scss']
})
export class CadViewerComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
  }
}
