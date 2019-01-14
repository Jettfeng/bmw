import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerEditComponent } from './dealer-edit.component';

describe('DealerEditComponent', () => {
  let component: DealerEditComponent;
  let fixture: ComponentFixture<DealerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
