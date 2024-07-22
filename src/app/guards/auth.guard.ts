import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync,
  Router,
} from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';
@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: MaybeAsync<GuardResult>) {
    if (this.authService.authStatus == true) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
