import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanStateService {
  private planState: {[usedView: string]: {[objectName: string]: string[]} }= {};
  constructor() {
      this.planState["test"] = ["asdsad"]
  }
  addCommentToPlan (usedView: string, objectName: string, comment: string) {
    if (!this.planState.hasOwnProperty(usedView))
    {
      this.planState[usedView] = {};
    }
    if (this.planState.hasOwnProperty(objectName))
    {
      this.planState[usedView][objectName].push(comment);
    } else {
      this.planState[usedView][objectName] = [comment];
    }
  }
  getPlan(usedView: string) {
      if(!this.planState.hasOwnProperty(usedView)){
        this.planState[usedView] = {}
      }
      return this.planState[usedView];
  }
}
