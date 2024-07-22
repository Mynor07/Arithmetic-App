import { TestBed } from '@angular/core/testing';

import { ArithmeticApiService } from './arithmetic-api.service';

describe('ArithmeticApiService', () => {
  let service: ArithmeticApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
