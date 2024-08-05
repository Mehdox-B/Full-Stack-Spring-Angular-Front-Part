import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment, PaymentType } from '../model/students_model';
import { ActivatedRoute } from '@angular/router';
import { StudentSvcService } from '../service/student-svc.service';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrl: './new-payment.component.css',
})
export class NewPaymentComponent implements OnInit {
  paymentFormGroup!: FormGroup;
  studentCode!: string;
  paymentType: Array<string> = [];
  pdfFileUrl!: string;
  private showProgress: boolean = true;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private student_svc: StudentSvcService
  ) {}
  ngOnInit(): void {
    for (let element in PaymentType) {
      let valueOfPaymentType = PaymentType[element];
      if (typeof valueOfPaymentType === 'string') {
        this.paymentType.push(valueOfPaymentType);
      }
    }
    this.studentCode = this.route.snapshot.params['code'];
    this.paymentFormGroup = this.fb.group({
      date: this.fb.control(''),
      amount: this.fb.control(''),
      paymentType: this.fb.control(''),
      studentCode: this.fb.control(`${this.studentCode}`),
      paymentFileSource: this.fb.control(''),
      paymentFileName: this.fb.control(''),
    });
  }
  public selectFile(event: any): void {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.paymentFormGroup.patchValue({
        paymentFileSource: file,
        paymentFileName: file.name,
      });
      this.pdfFileUrl = window.URL.createObjectURL(file);
      this.showProgress = false;
    }
  }
  public savePayment() {
    this.showProgress = true;
    //For Adapting The Date Format To The BackendSide Format
    let date: Date = new Date(this.paymentFormGroup.value.date);
    let formatedDate =
      date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
    let formData = new FormData();
    formData.set('date', formatedDate);
    formData.set('amount', this.paymentFormGroup.value.amount);
    formData.set('type', this.paymentFormGroup.value.paymentType);
    formData.set('studentCode', this.paymentFormGroup.value.studentCode);
    formData.set('file', this.paymentFormGroup.value.paymentFileSource);
    this.student_svc.savePayment(formData).subscribe({
      next(Date) {
        alert('The Payment is saved Successfuly');
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('The Operation is Done With No Error');
      },
    });
  }
  public afterLoadComplete(event: any) {
    console.log(event);
  }
}
