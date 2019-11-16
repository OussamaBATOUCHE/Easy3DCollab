import { Component, OnInit } from '@angular/core';
import {PlanStateService} from '../shared/plan-state.service';

@Component({
  selector: 'app-viewer-comment-list',
  templateUrl: './viewer-comment-list.component.html',
  styleUrls: ['./viewer-comment-list.component.scss']
})
export class ViewerCommentListComponent implements OnInit {
  plan = {};
  isCollapsed = {};
  constructor(private planStateService: PlanStateService) { }

  ngOnInit() {
    this.plan = this.planStateService.getPlan();
  }
}
