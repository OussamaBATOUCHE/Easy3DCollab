import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyInformationComponent } from './therapy-information.component';

describe('TherapyInformationComponent', () => {
  let component: TherapyInformationComponent;
  let fixture: ComponentFixture<TherapyInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapyInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
