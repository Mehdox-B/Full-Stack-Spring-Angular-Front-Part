import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rolesProtectionGuard } from './roles-protection.guard';

describe('rolesProtectionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rolesProtectionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
