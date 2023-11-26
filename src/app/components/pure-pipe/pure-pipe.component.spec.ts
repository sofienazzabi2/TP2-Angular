import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurePipeComponent } from './pure-pipe.component';

describe('PurePipeComponent', () => {
  let component: PurePipeComponent;
  let fixture: ComponentFixture<PurePipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurePipeComponent]
    });
    fixture = TestBed.createComponent(PurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
