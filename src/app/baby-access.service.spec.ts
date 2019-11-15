import { TestBed, inject } from '@angular/core/testing';

import { BabyAccessService } from './baby-access.service';

describe('BabyAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabyAccessService]
    });
  });

  it('should be created', inject([BabyAccessService], (service: BabyAccessService) => {
    expect(service).toBeTruthy();
  }));
});
