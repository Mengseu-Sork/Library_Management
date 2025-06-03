import { Book } from "./Book";
import { Member } from "./Member";

/**
 * Represents a booking system for reserving books in a library.
 * Allows members to check the availability of books, reserve them, and cancel bookings.
 */
export class Booking {
  private reservedBooks: Book[] = [];

  constructor(
    public bookingID: string,
    public bookingDate: Date,
    public book: Book,
    public member: Member
  ) { }

  /**
  * Checks if a book is available for reservation.
  * @param book The book to check availability for.
  * @returns True if the book is available, false otherwise.
  */
  public checkBook(book: Book): boolean {
    return book.isAvailable();
  }


  /**
   * Reserves a book if it is available.
   * @param book The book to reserve.
   */
  public reserveBook(book: Book): void {
    if (book.isAvailable()) {
      this.reservedBooks.push(book);
      book.borrowCopy();
    }
  }


  /**
   * Cancels a reservation for a book.
   * @param book The book to cancel the reservation for.
   */
  public cancelBooking(book: Book): void {
    const index = this.reservedBooks.indexOf(book);
    if (index !== -1) {
      this.reservedBooks.splice(index, 1);
      book.returnCopy();
    }
  }
}
