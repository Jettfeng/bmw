import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaconRegisterComponent } from './beacon-register.component';

describe('BeaconRegisterComponent', () => {
  let component: BeaconRegisterComponent;
  let fixture: ComponentFixture<BeaconRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaconRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
