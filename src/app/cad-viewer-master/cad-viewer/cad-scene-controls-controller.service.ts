import {EventEmitter, Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadSceneControlsControllerService {
 /*
 * This Service handles the communications and conversion of commands between cad controls and cad scene.
 */
  toControls = new EventEmitter <any>();
  toScene = new EventEmitter <any>();
  fromSceneEvents = new EventEmitter<any>();
  constructor() {
    this.fromSceneEvents.subscribe((data) => {this.convertFromSceneToControls(data)})

  }

  getToControlsSubscription() {
    return this.toControls.subscribe;
  }
  getToSceneSubscription() {
    return this.toScene.subscribe;
  }
  fromScene(data) {
    console.log("fromScene");
    this.fromSceneEvents.emit(data);
  }
  convertFromSceneToControls(data)
  {
    console.log("convertFromScene");
    this.toControls.emit(data);
  }
  convertFromControlsToScene(data) {
    this.toControls.emit(data);
  }
}
