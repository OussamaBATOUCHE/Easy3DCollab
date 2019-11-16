import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentSceneComponent } from './treatment-scene.component';

describe('CadSceneComponent', () => {
  let component: TreatmentSceneComponent;
  let fixture: ComponentFixture<TreatmentSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
