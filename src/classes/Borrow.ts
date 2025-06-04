  import { Book } from "./Book";
  import { BorrowStatus } from "../Enums/BorrowStatus";
  import { User } from "./user";

  export class Borrow {
    private fine: number = this.calculateFine() ; // declear variable for find user money

    constructor(
      public book: Book[], 
      public member: User,
      public issueDate: Date,
      public returnDate: Date,
      public status: BorrowStatus,
      
    ) {}

    calculateDueDate(): Date { // amount day that user can borrow book 
      const due = new Date(this.issueDate);
      due.setDate(due.getDate() + 14);
      return due;
    }

    isLate(): boolean {  // caculate date user return book or not
      const dueDate = this.calculateDueDate();
      const actualReturnDate = this.returnDate ?? new Date();
      return actualReturnDate > dueDate;
    }

    calculateFine(): number { //caculate money that find to user if they return book late
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

    returnBook(): void { // user return book date
      this.returnDate = new Date();
      this.status = BorrowStatus.RETURNED;
      this.calculateFine(); // Automatically checks late return and fine
    }
  }
