import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Sort, MatSortModule } from '@angular/material/sort';
import {
  MatInput,
  MatInputModule,
  MatFormField,
} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { rolesProtectionGuard } from './guards/roles-protection.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentsInfosComponent } from './students-infos/students-infos.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    PaymentsComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    StudentsComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent,
    NotFoundComponentComponent,
    StudentsInfosComponent,
    NewPaymentComponent,
    PaymentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormField,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelect,
    MatOption,
    PdfViewerModule,
    MatProgressSpinnerModule,
  ],
  providers: [AuthGuard, rolesProtectionGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
