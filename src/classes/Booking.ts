import { Book } from "./Book";
// export class Booking {
//   private reservedBooks: Book[] = [];

//   constructor() {}

//   public checkBook(book: Book): boolean {
//     return book.checkAvailability();
//   }
//     public reserveBook(book: Book): void {
//     if (book.checkAvailability()) {
//       this.reservedBooks.push(book);
//       book.reserveBook();
//     }
//   }
// }
export class Booking {
    private bookId: string;
    private bookingDate: Date;
    private bookingBook: string;

    constructor(bookId: string, bookingDate: Date, bookingBook: string) {
        this.bookId = bookId;
        this.bookingDate = bookingDate;
        this.bookingBook = bookingBook;
    }
    getBookId(): string {
        return this.bookId;
    }
    getBookingDate(): Date {
        return this.bookingDate;
    }
    getBookingBook(): string {
        return this.bookingBook;
    }

    checkBook(book: Book): void {

    }

    cancelBooking(book: Book): void {

    }

}


