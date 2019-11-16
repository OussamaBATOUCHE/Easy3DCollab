import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CadSceneControlsControllerService} from './cad-viewer/cad-scene-controls-controller.service';

import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cad-viewer-master',
  templateUrl: './cad-viewer-master.component.html',
  styleUrls: ['./cad-viewer-master.component.css']
})
export class CadViewerMasterComponent implements OnInit, OnDestroy{
  selectedOrgan: string;
  onSceneEventSubscriber: Subscription;
  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';
  constructor(private cadSceneControlsControllerService: CadSceneControlsControllerService) {
  }

  ngOnInit() {
    this.onSceneEventSubscriber = this.cadSceneControlsControllerService.toControls.subscribe((data) => this.onSceneEvent(data));

  }
  onSceneEvent(data) {
    this.selectedOrgan = data.object;
  }
  ngOnDestroy(): void {
    this.onSceneEventSubscriber.unsubscribe();
  }


  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'bar') {
      $event.preventDefault();
    }
  };
}
