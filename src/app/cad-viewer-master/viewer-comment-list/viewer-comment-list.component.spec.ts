import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerCommentListComponent } from './viewer-comment-list.component';

describe('ViewerCommentListComponent', () => {
  let component: ViewerCommentListComponent;
  let fixture: ComponentFixture<ViewerCommentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerCommentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
