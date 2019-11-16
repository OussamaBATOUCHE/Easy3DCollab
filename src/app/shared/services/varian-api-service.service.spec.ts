import { TestBed } from '@angular/core/testing';

import { VarianApiServiceService } from './varian-api-service.service';

describe('VarianApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VarianApiServiceService = TestBed.get(VarianApiServiceService);
    expect(service).toBeTruthy();
  });
});
