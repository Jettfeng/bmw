import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigNotificationComponent } from './car-config-notification.component';

describe('CarConfigNotificationComponent', () => {
  let component: CarConfigNotificationComponent;
  let fixture: ComponentFixture<CarConfigNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarConfigNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarConfigNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
