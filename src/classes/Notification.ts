import { Book } from "./Book";
export class Notification {
    private name: string;
    private email: string;
    private bookDate: number;

    constructor(name: string, email: string, bookDate: number) {
        this.name = name;
        this.email = email;
        this.bookDate = bookDate;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email;
    }
    getBookDate(): number {
        return this.bookDate;
    }

    checkBook(book: Book): void {

    }

    cancelBooking(book: Book): void {
        
    }

}