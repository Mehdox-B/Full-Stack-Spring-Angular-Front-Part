import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentSvcService } from '../service/student-svc.service';
import { Student, Payment } from '../model/students_model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-load-students',
  templateUrl: './load-students.component.html',
  styleUrl: './load-students.component.css',
})
export class LoadStudentsComponent implements OnInit {
  public students!: Array<Student>;
  public studentDataSource!: any;
  public displayedColumns: Array<string> = [
    'id',
    'firstName',
    'lastName',
    'code',
    'payments',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private student_svc: StudentSvcService, private router: Router) {}
  ngOnInit(): void {
    this.student_svc.getAllStudents().subscribe({
      next: (Data) => {
        this.students = Data;
        this.studentDataSource = new MatTableDataSource(this.students);
        this.studentDataSource.paginator = this.paginator;
        this.studentDataSource.sort = this.sort;
      },
      error: (Error) => {
        console.log(Error);
      },
      complete: () => {
        console.log('The List of Students is Fetched Successfuly ');
      },
    });
  }
  public studentPayments(student: Student) {
    this.router.navigateByUrl(`/admin/student_Infos/${student.code}`);
  }
}
