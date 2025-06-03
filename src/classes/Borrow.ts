  import { Book } from "./Book";
  import { BorrowStatus } from "../Enums/BorrowStatus";
  import { Member } from "./Member";
  import { User } from "./user";

  export class Borrow {
    private fine: number = this.calculateFine() ;

    constructor(
      public book: Book[],
      public member: User,
      public issueDate: Date,
      public returnDate: Date,
      public status: BorrowStatus,
      
    ) {}

    calculateDueDate(): Date {
      const due = new Date(this.issueDate);
      due.setDate(due.getDate() + 14);
      return due;
    }

    isLate(): boolean {
      const dueDate = this.calculateDueDate();
      const actualReturnDate = this.returnDate ?? new Date();
      return actualReturnDate > dueDate;
    }

    calculateFine(): number {
      if (this.isLate()) {
        const dueDate = this.calculateDueDate();
        const returnedOn = this.returnDate ?? new Date();
        const timeDiff = returnedOn.getTime() - dueDate.getTime();
        const daysLate = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        this.fine = daysLate * 0.5;
      } else {
        this.fine = 0;
      }
      return this.fine;
    }

    returnBook(): void {
      this.returnDate = new Date();
      this.status = BorrowStatus.RETURNED;
      this.calculateFine(); // Automatically checks late return and fine
    }
  }
