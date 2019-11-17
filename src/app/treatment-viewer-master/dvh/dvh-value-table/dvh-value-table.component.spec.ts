import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvhValueTableComponent } from './dvh-value-table.component';

describe('DvhValueTableComponent', () => {
  let component: DvhValueTableComponent;
  let fixture: ComponentFixture<DvhValueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvhValueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvhValueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
