import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadViewerComponent } from './cad-viewer.component';

describe('CadViewerComponent', () => {
  let component: CadViewerComponent;
  let fixture: ComponentFixture<CadViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
