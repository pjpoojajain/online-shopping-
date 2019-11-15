import { TestBed, inject } from '@angular/core/testing';

import { MensService } from './mens.service';

describe('MensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensService]
    });
  });

  it('should be created', inject([MensService], (service: MensService) => {
    expect(service).toBeTruthy();
  }));
});
