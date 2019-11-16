import { TestBed } from '@angular/core/testing';

import { PlanStateFireStoreService } from './plan-state-fire-store.service';

describe('PlanStateFireStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanStateFireStoreService = TestBed.get(PlanStateFireStoreService);
    expect(service).toBeTruthy();
  });
});
