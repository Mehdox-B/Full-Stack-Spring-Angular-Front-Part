/* prettier-ignore */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userType } from './requiredTypes';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  //For Keeping The informations saved while the users is connected
  public username!: any;
  public userRoles!: string[];
  public authStatus: boolean = false;
  public usersList: any = {
    admin: ['Admin', 'Student'],
    user1: ['Student'],
  };
  constructor(private router: Router) {}
  public login = (username: string, password: string | number): boolean => {
    if (this.usersList[username] && password === '1234') {
      this.username = username;
      this.userRoles = this.usersList[username];
      this.authStatus = true;
      //console.log(this.username, this.userRoles);

      return true;
    } else return false;
  };
  public logOut = (): void => {
    this.authStatus = false;
    this.username = undefined;
    this.userRoles = [];
    this.router.navigateByUrl('/login');
  };
}
