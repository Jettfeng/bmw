import { TestBed, inject } from '@angular/core/testing';

import { BeaconService } from './beacon.service';

describe('StationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeaconService]
    });
  });

  it('should be created', inject([BeaconService], (service: BeaconService) => {
    expect(service).toBeTruthy();
  }));
});
