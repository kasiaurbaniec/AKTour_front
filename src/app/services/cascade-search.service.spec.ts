import { TestBed } from '@angular/core/testing';

import { CascadeSearchService } from './cascade-search.service';

describe('CascadeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CascadeSearchService = TestBed.get(CascadeSearchService);
    expect(service).toBeTruthy();
  });
});
