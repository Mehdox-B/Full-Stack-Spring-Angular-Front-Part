import { Injectable } from '@angular/core';
import { setPostSignalSetFn } from '@angular/core/primitives/signals';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  //For Keeping The informations saved while the users is connected
  public username!: string | any;
  public userRoles!: String[] | any;
  public authStatus: boolean = false;
  constructor(private router: Router) {}
  public login = (username: String, password: String | number): boolean => {
    if (username === 'mehdox' && password === '1234') {
      this.username = username;
      this.userRoles = ['Admin'];
      this.authStatus = true;
      return true;
    } else return false;
  };
  public logOut = (): void => {
    this.authStatus = false;
    this.username = undefined;
    this.userRoles = undefined;
    this.router.navigateByUrl('/login');
  };
}
