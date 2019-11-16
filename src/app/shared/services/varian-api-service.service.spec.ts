import { TestBed } from '@angular/core/testing';

import { VarianApiService } from './varian-api.service';

describe('VarianApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VarianApiService = TestBed.get(VarianApiService);
    expect(service).toBeTruthy();
  });
});
