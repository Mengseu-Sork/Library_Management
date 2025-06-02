import { Book } from "./Book";
import { BorrowStatus } from "../Enums/BorrowStatus";
import { Member } from "./Member";
export class Borrow {

  constructor(
    public book: Book,
    public member: Member,
    public issueDate: Date,
    public returnDate: Date,
    public status: BorrowStatus,
    public fine: number,

  ) {

  }
   calculateDueDate(): Date {
    const due = new Date(this.issueDate);
    due.setDate(due.getDate() + 14);
    return due;
  }
   calculateFine(): number {
    const dueDate = this.calculateDueDate();
    const returnedOn = this.returnDate ?? new Date();

    const timeDiff = returnedOn.getTime() - dueDate.getTime();
    const daysLate = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysLate > 0) {
      this.fine = daysLate * 0.5; 
    } else {
      this.fine = 0;
    }

    return this.fine;
  }
   returnBook(): void {
    this.returnDate = new Date();
    this.status = BorrowStatus.RETURNED;
    this.calculateFine();
  }
  
//     canBorrowMore(): boolean {
//     return this.member.activeBorrowCount() < 5;
//   }
}
