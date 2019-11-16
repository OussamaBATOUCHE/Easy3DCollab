import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSceneComponent } from './cad-scene.component';

describe('CadSceneComponent', () => {
  let component: CadSceneComponent;
  let fixture: ComponentFixture<CadSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
