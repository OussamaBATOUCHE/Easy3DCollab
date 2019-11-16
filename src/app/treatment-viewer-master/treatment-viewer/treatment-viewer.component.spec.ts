import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentViewerComponent } from './treatment-viewer.component';

describe('CadViewerComponent', () => {
  let component: TreatmentViewerComponent;
  let fixture: ComponentFixture<TreatmentViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
