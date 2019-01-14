import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerConfigNotificationComponent } from './dealer-config-notification.component';

describe('DealerConfigNotificationComponent', () => {
  let component: DealerConfigNotificationComponent;
  let fixture: ComponentFixture<DealerConfigNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerConfigNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerConfigNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
