import { TestBed } from '@angular/core/testing';

import { PlanStateService } from './plan-state.service';

describe('PlanStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanStateService = TestBed.get(PlanStateService);
    expect(service).toBeTruthy();
  });
});
