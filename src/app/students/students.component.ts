import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit, AfterViewInit {
  public studentsList: any[] = [];
  public studentsDataSource: any;
  public displayedColumns: String[] = [
    'Student_ID',
    'firstName',
    'lastName',
    'Payments',
  ];

  constructor(private router: Router) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    for (let index: number = 1; index <= 100; index++) {
      this.studentsList.push({
        Student_ID: index,
        firstName: Math.random().toString(10),
        lastName: Math.random().toString(10),
      });
    }
    //Angular Material feature to handle table operation in the client-side (sorting,pagination,filtering,...)
    this.studentsDataSource = new MatTableDataSource(this.studentsList);
  }
  ngAfterViewInit() {
    this.studentsDataSource.paginator = this.paginator;
    this.studentsDataSource.sort = this.sort;
  }
  //Function that handle An event which takes place in the DOM.
  filterStudents(event: Event): void {
    let value = (event.target as HTMLInputElement).value;
    this.studentsDataSource.filter = value;
  }
  getPayments(student: any): void {
    this.router.navigateByUrl('/payments');
  }
}
