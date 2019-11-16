import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentViewerMasterComponent } from './treatment-viewer-master.component';

describe('CadViewerMasterComponent', () => {
  let component: TreatmentViewerMasterComponent;
  let fixture: ComponentFixture<TreatmentViewerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentViewerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentViewerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
