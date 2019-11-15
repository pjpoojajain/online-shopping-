import { TestBed, inject } from '@angular/core/testing';

import { FootwearService } from './footwear.service';

describe('FootwearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootwearService]
    });
  });

  it('should be created', inject([FootwearService], (service: FootwearService) => {
    expect(service).toBeTruthy();
  }));
});
