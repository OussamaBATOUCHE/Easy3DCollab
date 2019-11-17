import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PlanStateService} from '../shared/plan-state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  commentForm = new FormControl('')
  checkboxForm = new FormControl('')
  @Input()patientId
  @Input()planId
  constructor(private planStateService: PlanStateService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.planStateService.addCommentToPlan(this.patientId,this.planId,'summary','no',this.checkboxForm.value+' - '+this.commentForm.value)
    console.log(this.checkboxForm.value)
  }
}
