import { TestBed, inject } from '@angular/core/testing';

import { CarService } from './car.service';

describe('NodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService]
    });
  });

  it('should be created', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
