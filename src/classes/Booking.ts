import { Book } from "./Book";
import { Member } from "./Member";
// This class represents a booking system for reserving books in a library.
// It allows members to check the availability of books, reserve them, and cancel bookings.

export class Booking {
  private reservedBooks: Book[] = [];

  constructor(
    public bookingID: string,
    public bookingDate: Date,
    public category: string
  ) { }

  public checkBook(book: Book): boolean {   // This method checks if a book is available for reservation.
    return book.isAvailable();
  }

  public reserveBook(book: Book): void {   // This method reserves a book if it is available.
    if (book.isAvailable()) {
      this.reservedBooks.push(book);
      book.borrowCopy();
    }
  }

  public cancelBooking(book: Book): void {   // This method cancels a reservation for a book.
    const index = this.reservedBooks.indexOf(book);
    if (index !== -1) {
      this.reservedBooks.splice(index, 1);
      book.returnCopy();
    }
  }
}