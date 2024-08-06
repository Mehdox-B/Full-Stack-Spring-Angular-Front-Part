import { Component, OnInit } from '@angular/core';
import { StudentSvcService } from '../service/student-svc.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
})
export class PaymentDetailsComponent implements OnInit {
  private paymentId!: number;
  private mediaType = 'application/pdf';
  public pdfFileUrl!: string;
  constructor(
    private student_svc: StudentSvcService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paymentId = this.route.snapshot.params['payment_code'];
    this.student_svc.getPaymentDetails(this.paymentId).subscribe({
      next: (Data: Blob) => {
        let blobFile = new Blob([Data], { type: this.mediaType });
        this.pdfFileUrl = window.URL.createObjectURL(blobFile);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('The File is Fetched Successfuly');
      },
    });
  }
  public afterLoadComplete(event: any) {
    //--------------------------------//
  }
}
