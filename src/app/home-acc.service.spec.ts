import { TestBed, inject } from '@angular/core/testing';

import { HomeAccService } from './home-acc.service';

describe('HomeAccService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeAccService]
    });
  });

  it('should be created', inject([HomeAccService], (service: HomeAccService) => {
    expect(service).toBeTruthy();
  }));
});
