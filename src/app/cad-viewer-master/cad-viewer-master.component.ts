import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CadSceneControlsControllerService} from './cad-viewer/cad-scene-controls-controller.service';

import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import {VarianApiService} from '../shared/services/varian-api.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-cad-viewer-master',
  templateUrl: './cad-viewer-master.component.html',
  styleUrls: ['./cad-viewer-master.component.css']
})
export class CadViewerMasterComponent implements OnInit, OnDestroy{
  selectedOrgan: string;
  patientId
  planId
  onSceneEventSubscriber: Subscription;
  patients;
  t: any;
  currentJustify = 'start';
  currentOrientation = 'horizontal';
  constructor(private cadSceneControlsControllerService: CadSceneControlsControllerService, private varianApiService: VarianApiService,   private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit() {
    this.patientId = this.route.snapshot.params['patientId']
    this.planId = this.route.snapshot.params['planId']

    this.onSceneEventSubscriber = this.cadSceneControlsControllerService.toControls.subscribe((data) => this.onSceneEvent(data));
    this.patients = this.varianApiService.getPatientPlans("Abdomen")

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
