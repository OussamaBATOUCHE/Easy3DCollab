import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerCommentComponent } from './viewer-comment.component';

describe('ViewerCommentComponent', () => {
  let component: ViewerCommentComponent;
  let fixture: ComponentFixture<ViewerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
