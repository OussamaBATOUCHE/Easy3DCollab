import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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
  @Input()usedView: string ="";
  @Input() description: string;
  @Input() selectedObject: string;
  commentForm = new FormControl('')
  onSceneEventSubscriber: Subscription;
  constructor(private cadSceneControlsControllerService: CadSceneControlsControllerService, private planStateService: PlanStateService) {
  }

  ngOnInit() {
    this.onSceneEventSubscriber = this.cadSceneControlsControllerService.toControls.subscribe((data) => this.onSceneEvent(data));

  }
  onSceneEvent(data) {
    this.selectedObject = data.object;
  }
  ngOnDestroy(): void {
    this.onSceneEventSubscriber.unsubscribe();
  }
  onSubmit(): void {
    this.planStateService.addCommentToPlan(this.usedView, this.selectedObject, this.commentForm.value);
    this.commentForm.reset()
  }
}
