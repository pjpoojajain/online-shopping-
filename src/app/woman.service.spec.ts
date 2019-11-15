import { TestBed, inject } from '@angular/core/testing';

import { WomanService } from './woman.service';

describe('WomanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WomanService]
    });
  });

  it('should be created', inject([WomanService], (service: WomanService) => {
    expect(service).toBeTruthy();
  }));
});
