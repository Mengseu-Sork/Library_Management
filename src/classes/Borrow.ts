import { Book } from "./Book";
export class Borrow {
  constructor(
    private BookName: string,
    private AmountBook: number,
    private StartDate: Date = new Date()
  ) {
    this.BookName = BookName;
    this.AmountBook = AmountBook;
    this.StartDate = StartDate;
    }
    getBookNmae(){
        this.BookName;
    }
    getAmountBook(){
        this.AmountBook;
    }
    getStarDate(){
        return this.StartDate;
    }
    viewBorrow(book: Book): void {
        
    }

    returnBook(book: Book): void {
        
    }

    reserveBook(book: Book): void {
        
    }

    reviewBook(book: Book): void {
        
    }

    calculateDueDate(start: Date): Date {
        const due = new Date(start);
        due.setDate(due.getDate() + 14);
        return due;
    }
}
