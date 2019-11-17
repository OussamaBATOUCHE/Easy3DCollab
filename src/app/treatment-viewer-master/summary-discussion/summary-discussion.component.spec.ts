import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDiscussionComponent } from './summary-discussion.component';

describe('SummaryDiscussionComponent', () => {
  let component: SummaryDiscussionComponent;
  let fixture: ComponentFixture<SummaryDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
