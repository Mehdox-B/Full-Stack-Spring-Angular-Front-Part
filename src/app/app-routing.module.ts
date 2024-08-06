import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { rolesProtectionGuard } from './guards/roles-protection.guard';
import { StudentsInfosComponent } from './students-infos/students-infos.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminTemplateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'load-students',
        component: LoadStudentsComponent,
        canActivate: [rolesProtectionGuard],
        data: {
          roles: ['Admin'],
        },
      },
      {
        path: 'load-payments',
        component: LoadPaymentsComponent,
        canActivate: [rolesProtectionGuard],
        data: {
          roles: ['Admin'],
        },
      },
      {
        path: 'student_Infos/:code', //Route with code paramater
        component: StudentsInfosComponent,
        canActivate: [rolesProtectionGuard],
        data: {
          roles: ['Admin'],
        },
      },
      {
        path: 'new_payment/:code',
        component: NewPaymentComponent,
        canActivate: [rolesProtectionGuard],
        data: {
          roles: ['Admin'],
        },
      },
      {
        path: 'payment_details/:payment_code',
        component: PaymentDetailsComponent,
        canActivate: [rolesProtectionGuard],
        data: {
          roles: ['Admin'],
        },
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
