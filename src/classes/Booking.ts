import { Book } from "./Book";
import { Member } from "./Member";
export class Booking {
  private reservedBooks: Book[] = [];

  constructor(
    public bookingID: string,
    public bookingDate: Date,
    public member: Member,
    public category: string
  ) {}

  public checkBook(book: Book): boolean {
    return book.isAvailable();
  }

  public reserveBook(book: Book): void {
    if (book.isAvailable()) {
      this.reservedBooks.push(book);
      book.borrowCopy();
    }
  }

  public cancelBooking(book: Book): void {
    const index = this.reservedBooks.indexOf(book);
    if (index !== -1) {
      this.reservedBooks.splice(index, 1);
      book.returnCopy();
    }
  }
}