import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCreateComponent } from './dealer-create.component';

describe('DealerCreateComponent', () => {
  let component: DealerCreateComponent;
  let fixture: ComponentFixture<DealerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
