import { Member } from "./Member";
import { Book } from "./Book";

export class Librarian {
    private userName: string;
    private email: string;
    private books: Book[] = [];
    private members: Member[] = [];
    private borrowedBooks: Map<string, number> = new Map();

    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }

    getUserName(): string {
        return this.userName;
    }

    getEmail(): string {
        return this.email;
    }

    public login(): void {}

    public addBooks(): void {}

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public updateBook(book: Book): void {
        const index = this.books.findIndex(b => b.getBookId() === book.getBookId());
        if (index !== -1) {
            this.books[index] = book;
        }
    }

    public removeBook(book: Book): void {
        const index = this.books.findIndex(b => b.getBookId() === book.getBookId());
        if (index !== -1) {
            this.books.splice(index, 1);
            this.borrowedBooks.delete(book.getBookId());
        }
    }

    public checkSales(): void {
        this.borrowedBooks.clear();
        for (const book of this.books) {
            const initialCopies = book.getAvailableCopies() + (this.borrowedBooks.get(book.getBookId()) || 0);
            const borrowed = initialCopies - book.getAvailableCopies();
            if (borrowed > 0) {
                this.borrowedBooks.set(book.getBookId(), borrowed);
            }
        }
    }

    public viewAllMembers(): void {}

    public getMembers(): Member[] {
        return this.members;
    }

    public addMember(member: Member): void {
        this.members.push(member);
    }

    public getBorrowedBooks(): Map<string, number> {
        return this.borrowedBooks;
    }
}