import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Student, Payment } from '../model/students_model';

@Injectable({
  providedIn: 'root',
})
export class StudentSvcService {
  constructor(private http: HttpClient) {}
  public getAllPayments(): Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(
      `${environment.backend_Host}/payments`
    );
  }
  public getAllStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(
      `${environment.backend_Host}/students`
    );
  }
  public getStudentPayments(student_code: string): Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(
      `${environment.backend_Host}/students/${student_code}/payments`
    );
  }
  public savePayment(formData: any): Observable<Payment> {
    return this.http.post<Payment>(
      `${environment.backend_Host}/payments`,
      formData
    );
  }
  public getPaymentDetails(paymentId: number): Observable<Blob> {
    return this.http.get(
      `${environment.backend_Host}/paymentFile/${paymentId}`,
      { responseType: 'blob' }
    );
  }
}
