import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlanStateService} from '../shared/plan-state.service';

@Component({
  selector: 'app-summary-discussion',
  templateUrl: './summary-discussion.component.html',
  styleUrls: ['./summary-discussion.component.scss']
})
export class SummaryDiscussionComponent implements OnInit {

  @Input()patientId;
  @Input() planId;
  @Input() usedView: string;
  plan = {}

  planSubscription;
  isCollapsed = {};
  constructor(private planStateService: PlanStateService) { }

  ngOnInit() {
    console.log(this.patientId + this.planId, this.usedView)
    this.planSubscription = this.planStateService.getPlan(this.patientId, this.planId, this.usedView).subscribe(result => {
          this.plan = result[this.patientId][this.planId][this.usedView]['no'];
      console.log(this.plan)
        }
    );
  }
}
