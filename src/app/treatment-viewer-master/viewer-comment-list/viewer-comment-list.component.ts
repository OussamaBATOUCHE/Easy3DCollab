import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlanStateService} from '../shared/plan-state.service';

@Component({
  selector: 'app-viewer-comment-list',
  templateUrl: './viewer-comment-list.component.html',
  styleUrls: ['./viewer-comment-list.component.scss']
})
export class ViewerCommentListComponent implements OnInit {
  @Output() selectedComment = new EventEmitter<string>();
  @Input() usedView: string;
  plan = {};
  isCollapsed = {};
  constructor(private planStateService: PlanStateService) { }

  ngOnInit() {
    this.plan = this.planStateService.getPlan(this.usedView);
  }
}
