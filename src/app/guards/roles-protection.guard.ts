import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync,
  Router,
} from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Injectable()
export class rolesProtectionGuard {
  constructor(
    private route: Router,
    private authService: AuthenticateService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: MaybeAsync<GuardResult>) {
    let authorizationCheck: boolean = false;
    let currentUserRole: string[] = this.authService.userRoles;
    let authorizedRoles: string[] = route.data['roles'];

    // console.log(currentUserRole);
    // console.log(authorizedRoles);
    for (let index: number = 0; index <= authorizedRoles.length; index++) {
      if (authorizedRoles.includes(currentUserRole[index])) {
        authorizationCheck = true;
        return authorizationCheck;
      }
    }
    return authorizationCheck;
  }
}
