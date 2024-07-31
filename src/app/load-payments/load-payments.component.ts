import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-load-payments',
  templateUrl: './load-payments.component.html',
  styleUrl: './load-payments.component.css',
})
export class LoadPaymentsComponent implements OnInit {
  public paymentsResponse: any;
  public paymentsDataSource: any;
  public displayedColumns: string[] = [
    'id',
    'Date',
    'Amount',
    'Type',
    'Status',
    'firstName',
    'lastName',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:8081/payments').subscribe({
      next: (data) => {
        this.paymentsResponse = data;
        this.paymentsDataSource = new MatTableDataSource(this.paymentsResponse);
        this.paymentsDataSource.paginator = this.paginator;
        this.paymentsDataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('The Payments Data is Fetched Successfuly ');
      },
    });
  }
}
