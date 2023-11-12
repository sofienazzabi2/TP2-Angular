import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCvComponent } from './specific-cv.component';

describe('SpecificCvComponent', () => {
  let component: SpecificCvComponent;
  let fixture: ComponentFixture<SpecificCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificCvComponent]
    });
    fixture = TestBed.createComponent(SpecificCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
