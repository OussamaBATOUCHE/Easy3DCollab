import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanStateService {
  private planState: {[organName: string]: string[]} = {};
  constructor() {
      this.planState["test"] = ["asdsad"]
  }
  addCommentToPlan (organ: string, comment: string) {
    if (this.planState.hasOwnProperty(organ))
    {
      this.planState[organ].push(comment);
    } else {
      this.planState[organ] = [comment];
    }
  }
  getPlan(){
      return this.planState;
  }
}
