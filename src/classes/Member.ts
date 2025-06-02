import { Register } from "./Register";
import { Book } from "./Book";
import { Borrow } from "./Borrow";
import { Booking } from "./Booking";
import { Fine } from "./Fine";
import { Review } from "./Review";
import { BorrowStatus } from "../Enums/BorrowStatus";


export class Member extends Register {
    private memberID: string;
    private borrowedBooks: Borrow[] = [];
    private bookedBooks: Booking[] = [];
    private fines: Fine[] = [];
    private reviews: Review[] = [];
    constructor(
        memberID: string,
        fName: string,
        lName: string,
        email: string,
        phone: string,
        age: number,
        password: string,
        address: string
    ) {
        super(fName, lName, email, phone, age, password, address);
        this.memberID = memberID;
    }

    public getMemberID(): string {
        return this.memberID;
    }

    public getMemberInfo(memberID: string): Member | undefined {
        if (this.memberID === memberID) {
            console.log(`Retrieving info for member: ${this.getFirstName()} ${this.getLastName()} (${this.memberID})`);
            return this;
        }
        console.log(`Member with ID ${memberID} not found.`);
        return undefined;
    }

    public getAllEmail(): string {
        return this.getEmail();
    }

    public viewBorrowed(): Borrow[] {
        console.log(`Books currently borrowed by ${this.getFirstName()} ${this.getLastName()}:`);
        this.borrowedBooks.forEach(borrow => {
            console.log(` - ${borrow.book.getBookTitle()} (Due: ${borrow.calculateDueDate().toLocaleDateString()})`);
        });
        return this.borrowedBooks;
    }

    public viewBorrowedBooks(): Borrow[] {
        return this.viewBorrowed();
    }

    public renewBookBook(borrow: Borrow): boolean {
        const foundBorrow = this.borrowedBooks.find(b => b === borrow);
        if (foundBorrow) {
            console.log(`Book "${foundBorrow.book.getBookTitle()}" renewed for ${this.getFirstName()}.`);
            return true;
        }
        console.log(`Could not find borrow record to renew for ${this.getFirstName()}.`);
        return false;
    }

    public reserveBook(book: Book, bookingDate: Date): Booking {
      if (!book.isAvailable()) {
        console.log(`Book "${book.getBookTitle()}" is not available for booking.`);
        throw new Error("Book not available");
      }

      let newBooking = new Booking(`BOOKING-${Date.now()}`, book, this, bookingDate);
      this.bookedBooks.push(newBooking);
      book.borrowCopy();
      console.log(`Book "${book.getBookTitle()}" reserved by ${this.getFirstName()}.`);
      return newBooking;
    }

    public updateInfo(newAddress?: string, newPhone?: string): void {
        if (newAddress !== undefined) {
            this.address = newAddress;
        }
        if (newPhone !== undefined) {
            this.phone = newPhone;
        }
        console.log(`Member ${this.getFirstName()} ${this.getLastName()}'s info updated.`);
    }


    public addBorrowedBook(borrow: Borrow): void {
        this.borrowedBooks.push(borrow);
    }

    public removeBorrowedBook(borrow: Borrow): void {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== borrow);
    }


    public activeBorrowCount(): number {
        return this.borrowedBooks.filter(borrow => borrow.status !== BorrowStatus.RETURNED).length;
    }

    public addFine(fine: Fine): void {
      this.fines.push(fine);
      console.log(`Fine added for ${this.getFirstName()}. Amount: $${fine.amount}, Status: ${fine.status}`);
    }

    public getFines(): Fine[] {
        return this.fines;
    }

    public addReview(review: Review): void {
        this.reviews.push(review);
        console.log(`Review added by ${this.getFirstName()} for book ${review.getBookId}.`);
    }


    public getReviews(): Review[] {
        return this.reviews;
    }
}
