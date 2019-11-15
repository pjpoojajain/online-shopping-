import { TestBed, inject } from '@angular/core/testing';

import { BeautiService } from './beauti.service';

describe('BeautiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeautiService]
    });
  });

  it('should be created', inject([BeautiService], (service: BeautiService) => {
    expect(service).toBeTruthy();
  }));
});
