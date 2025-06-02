// import { Payment } from "./Payment";
// export class Fine {
//     private _amountDue: number;
//     private _money: number;
//     private _dueDate: Date; 
//     private _status: FineStatus;

//     constructor(amountDue: number, dueDate: Date) {
//         this._amountDue = amountDue;
//         this._money = 0;
//         this._dueDate = dueDate;
//         this._status = FineStatus.UNPAID;
//     }

//     getAmountDue(): number {
//         return this._amountDue;
//     }

//     getMoney(): number {
//         return this._money;
//     }

//     getDueDate(): Date {
//         return this._dueDate;
//     }

//     getStatus(): FineStatus {
//         return this._status;
//     }

//     recordPayment(paymentAmount: number): FineStatus {
//         if (paymentAmount > 0) {
//             this._money += paymentAmount;
//             if (this._money >= this._amountDue) {
//                 this._status = FineStatus.PAID;
//                 console.log(`Fine of $${this._amountDue.toFixed(2)} is now PAID.`);
//             } else {
//                 console.log(`Received $${paymentAmount.toFixed(2)}. Remaining balance: $${(this._amountDue - this._money).toFixed(2)}.`);
//             }
//         }
//         return this._status;
//     }

//     TotalFine(method: PaymentMethod): Payment {

//         return new Payment(this._amountDue, method);
//     }
// }