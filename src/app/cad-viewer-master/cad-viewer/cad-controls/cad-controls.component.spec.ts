import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadControlsComponent } from './cad-controls.component';

describe('CadControlsComponent', () => {
  let component: CadControlsComponent;
  let fixture: ComponentFixture<CadControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
