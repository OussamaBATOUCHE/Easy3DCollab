import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CadSceneControlsControllerService} from '../cad-viewer/cad-scene-controls-controller.service';
import {FormControl} from '@angular/forms';
import {PlanStateService} from '../shared/plan-state.service';

@Component({
  selector: 'app-viewer-comment',
  templateUrl: './viewer-comment.component.html',
  styleUrls: ['./viewer-comment.component.scss']
})
export class ViewerCommentComponent implements OnInit, OnDestroy {
  selectedOrgan: string;
  commentForm = new FormControl('')
  onSceneEventSubscriber: Subscription;
  constructor(private cadSceneControlsControllerService: CadSceneControlsControllerService, private planStateService: PlanStateService) {
  }

  ngOnInit() {
    this.onSceneEventSubscriber = this.cadSceneControlsControllerService.toControls.subscribe((data) => this.onSceneEvent(data));

  }
  onSceneEvent(data) {
    this.selectedOrgan = data.object;
  }
  ngOnDestroy(): void {
    this.onSceneEventSubscriber.unsubscribe();
  }
  onSubmit(): void {
    this.planStateService.addCommentToPlan(this.selectedOrgan, this.commentForm.value);
    this.commentForm.reset()
  }
}
