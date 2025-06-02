import { Book } from "./Book";
import { Member } from "./Member";

export class Booking {
    private bookingID: string;
    private book: Book;
    private bookingDate: Date;
    private member: Member;

    constructor(bookingID: string, book: Book, member: Member, bookingDate: Date) {
        this.bookingID = bookingID;
        this.book = book;
        this.member = member;
        this.bookingDate = bookingDate;
    }

    getBookingID(): string {
        return this.bookingID;
    }

    getBook(): Book {
        return this.book;
    }

    getBookingDate(): Date {
        return this.bookingDate;
    }

    getMember(): Member {
        return this.member;
    }

    checkBook(book: Book): boolean {
        return this.book === book;
    }

    cancelBooking(): void {
        console.log(`Booking ${this.bookingID} for "${this.book.getBookTitle()}" cancelled.`);

    }
}

