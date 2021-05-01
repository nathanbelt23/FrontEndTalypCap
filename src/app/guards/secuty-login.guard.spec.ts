import { TestBed } from '@angular/core/testing';

import { SecutyLoginGuard } from './secuty-login.guard';

describe('SecutyLoginGuard', () => {
  let guard: SecutyLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecutyLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
