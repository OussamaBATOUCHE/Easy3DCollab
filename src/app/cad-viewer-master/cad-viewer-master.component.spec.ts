import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadViewerMasterComponent } from './cad-viewer-master.component';

describe('CadViewerMasterComponent', () => {
  let component: CadViewerMasterComponent;
  let fixture: ComponentFixture<CadViewerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadViewerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadViewerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
