//--------------------//
export interface Student {
  id: string;
  code: string;
  firstName: string;
  lastName: string;
  picture: string;
}
//--------------------//
export interface Payment {
  id: number;
  date: string;
  amount: number;
  type: PaymentType;
  status: PaymentStatus;
  file: string;
  students: Student;
}
//--------------------//
export enum PaymentType {
  CASH,
  CHEQUE,
  TRANSACTION,
  DEPOSIT,
}
//--------------------//
export enum PaymentStatus {
  CREATED,
  VALIDATED,
  REJECTED,
}
