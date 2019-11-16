import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPlansComponent } from './patient-plans.component';

describe('PatientPlansComponent', () => {
  let component: PatientPlansComponent;
  let fixture: ComponentFixture<PatientPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
