import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTimelineComponent } from './car-timeline.component';

describe('CarTimelineComponent', () => {
  let component: CarTimelineComponent;
  let fixture: ComponentFixture<CarTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
