import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvhComponent } from './dvh.component';

describe('DvhComponent', () => {
  let component: DvhComponent;
  let fixture: ComponentFixture<DvhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
