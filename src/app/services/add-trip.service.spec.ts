import { TestBed } from '@angular/core/testing';

import { AddTripService } from './add-trip.service';

describe('AddTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTripService = TestBed.get(AddTripService);
    expect(service).toBeTruthy();
  });
});
