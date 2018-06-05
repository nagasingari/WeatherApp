import { TestBed, inject } from '@angular/core/testing';

import { ReverseService } from './reverse.service';

describe('ReverseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReverseService]
    });
  });

  it('should be created', inject([ReverseService], (service: ReverseService) => {
    expect(service).toBeTruthy();
  }));
});
