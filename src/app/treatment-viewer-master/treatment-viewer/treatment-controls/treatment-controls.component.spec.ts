import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentControlsComponent } from './treatment-controls.component';

describe('CadControlsComponent', () => {
  let component: TreatmentControlsComponent;
  let fixture: ComponentFixture<TreatmentControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
