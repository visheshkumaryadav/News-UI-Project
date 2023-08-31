import { TestBed } from '@angular/core/testing';

import { LoginsignupService } from './loginsignup.service';

describe('LoginsignupService', () => {
  let service: LoginsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
