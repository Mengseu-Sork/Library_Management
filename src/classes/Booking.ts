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

    
}