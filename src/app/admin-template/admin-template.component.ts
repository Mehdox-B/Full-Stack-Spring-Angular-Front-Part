import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css',
})
export class AdminTemplateComponent implements OnInit {
  constructor(public autService: AuthenticateService) {}
  ngOnInit(): void {}

  logOut = (): void => {
    this.autService.logOut();
  };
}
