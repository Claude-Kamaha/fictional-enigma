import { TestBed } from '@angular/core/testing';

import { KycServiceService } from './kyc-service.service';

describe('KycServiceService', () => {
  let service: KycServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KycServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
