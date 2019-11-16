import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageIsoDoseComponent } from './image-iso-dose.component';

describe('ImageIsoDoseComponent', () => {
  let component: ImageIsoDoseComponent;
  let fixture: ComponentFixture<ImageIsoDoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageIsoDoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageIsoDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
