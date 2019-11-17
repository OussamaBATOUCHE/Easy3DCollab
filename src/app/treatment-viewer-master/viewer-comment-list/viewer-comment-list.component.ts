import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlanStateService} from '../shared/plan-state.service';

@Component({
  selector: 'app-viewer-comment-list',
  templateUrl: './viewer-comment-list.component.html',
  styleUrls: ['./viewer-comment-list.component.scss']
})
export class ViewerCommentListComponent implements OnInit {
  @Input()patientId;
  @Input()planId;
  @Output() selectedComment = new EventEmitter<string>();
  @Input() usedView: string;
  plan = {};

  planSubscription;
  isCollapsed = {};
  constructor(private planStateService: PlanStateService) { }

  ngOnInit() {
    this.planSubscription = this.planStateService.getPlan(this.patientId, this.planId,this.usedView).
    subscribe(result => this.plan = result[this.patientId][this.planId]['no']);
  }
}
