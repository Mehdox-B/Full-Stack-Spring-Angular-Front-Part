import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../service/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public loginFormGroup!: FormGroup;
  constructor(
    private fbuilder: FormBuilder,
    private autService: AuthenticateService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginFormGroup = this.fbuilder.group({
      username: this.fbuilder.control(''), //Default Value is '' , empty string
      password: this.fbuilder.control(''), //Default Value is '' , empty string
    });
  }
  public login = (): void => {
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    let authResult: boolean = this.autService.login(username, password);
    if (authResult === true) {
      this.router.navigateByUrl('/admin');
    }
  };
}
