import {EventEmitter, Injectable} from '@angular/core';
import {PlanStateFireStoreService} from '../../shared/services/plan-state-fire-store.service';
import {interval} from 'rxjs';
import {dateISO} from 'ng2-validation/dist/date-ios';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PlanStateService {
  private planStates = {};
  planEmitter = new EventEmitter<any>();
    updater
  /*
  {'patientId': string,
    'planId': string,
    [usedView: string]: {[objectName: string]: string[]} }
   */
  constructor(private fireStoreService: PlanStateFireStoreService, private userService: UserService) {
 this.updatePlan();
 setInterval(() => this.updatePlan(), 1000)
  }

  updatePlan() {
      console.log('called');
      this.fireStoreService.get().subscribe(result => {
          this.planStates = JSON.parse(result['planStates']);
          this.planEmitter.emit(this.planStates)   }
      )
  }
  addCommentToPlan (patientId: string, planId: string, usedView: string, objectName: string, comment: string) {
      const time = new Date(Date.now())
      console.log("called");
      const fullComment = {'name': this.userService.getName(),
          'userType': this.userService.getUserType(), '_timestamp': time.toLocaleDateString() + 'T' + time.toLocaleTimeString(), 'comment': comment };
    console.log(fullComment)
    if (!this.planStates.hasOwnProperty(patientId)) {
      this.planStates[patientId] = {};
    }
    if (!this.planStates[patientId].hasOwnProperty(planId)) {
      this.planStates[patientId][planId] = {};
    }
    if (!this.planStates[patientId][planId].hasOwnProperty(usedView)) {
      this.planStates[patientId][planId][usedView] = {};
    }
    if (this.planStates[patientId][planId][usedView].hasOwnProperty(objectName)) {
      this.planStates[patientId][planId][usedView][objectName].push(fullComment);
    } else {
      this.planStates[patientId][planId][usedView][objectName] = [fullComment];
    }
    console.log(this.planStates);
      this.fireStoreService.put(this.planStates).subscribe((result) => {console.log(result)});
  }
  getPlan(patientId, planId, usedView: string) {
    if (!this.planStates.hasOwnProperty(patientId)) {
      this.planStates[patientId] = {};
    }
    if (!this.planStates[patientId].hasOwnProperty(planId)) {
      this.planStates[patientId][planId] = {};
    }
    if (!this.planStates[patientId][planId].hasOwnProperty(usedView)) {
      this.planStates[patientId][planId][usedView] = {};
    }
      return this.planEmitter;
  }
}
