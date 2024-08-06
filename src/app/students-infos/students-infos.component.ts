import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StudentSvcService } from '../service/student-svc.service';
import { Payment, Student } from '../model/students_model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students-infos',
  templateUrl: './students-infos.component.html',
  styleUrl: './students-infos.component.css',
})
export class StudentsInfosComponent implements OnInit {
  studentCode!: string;
  studentFullName!: string;
  studentPayments!: Array<Payment>;
  displayedColumns: Array<string> = [
    'id',
    'firstName',
    'lastName',
    'date',
    'type',
    'status',
    'amount',
    'payment_details',
  ];
  paymentDataSource!: MatTableDataSource<Payment>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private route: ActivatedRoute,
    private student_svc: StudentSvcService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.studentCode = this.route.snapshot.params['code'];
    this.student_svc.getStudentPayments(this.studentCode).subscribe({
      next: (Data) => {
        this.studentPayments = Data;
        this.paymentDataSource = new MatTableDataSource<Payment>(
          this.studentPayments
        );
        this.paymentDataSource.paginator = this.paginator;
        this.paymentDataSource.sort = this.sort;
        this.studentFullName = `${this.studentPayments[0].students.firstName}
         ${this.studentPayments[0].students.lastName} `;
      },
      error: (Error) => {
        console.log(Error);
      },
      complete: () => {
        console.log('The List of Students is Fetched Successfuly ');
      },
    });
  }
  public newPayment(): void {
    this.router.navigateByUrl(`admin/new_payment/${this.studentCode}`);
  }
  public getPaymentsDetails(element: Payment) {
    this.router.navigateByUrl(`/admin/payment_details/${element.id}`);
  }
}
