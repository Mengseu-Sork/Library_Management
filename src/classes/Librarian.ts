import { Member } from "./Member";
import { Book } from "./Book";

/**
 * Represents a librarian in the library system.
 * The librarian can manage books, members, and track borrowed books.
 */
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


    /**
     * Returns the username of the librarian.
     * @returns The librarian's username.
     */
    getUserName(): string {
        return this.userName;
    }


    /**
   * Returns the email of the librarian.
   * @returns The librarian's email.
   */
    getEmail(): string {
        return this.email;
    }

    /**
     * Logs the librarian into the system.
     */
    public login(): void { }

    /**
     * Adds multiple books to the library (implementation pending).
     */
    public addBooks(): void { }

    /**
    * Adds a book to the library.
    * @param book The book to add.
    */
    public addBook(book: Book): void {
        this.books.push(book);
    }

    /**
     * Updates an existing book in the library.
     * @param book The book with updated information.
     */
    public updateBook(book: Book): void {
        const index = this.books.findIndex(b => b.getBookId() === book.getBookId());
        if (index !== -1) {
            this.books[index] = book;
        }
    }

    /**
     * Removes a book from the library.
     * @param book The book to be removed.
     */
    public removeBook(book: Book): void {   // Removes a book from the library
        const index = this.books.findIndex(b => b.getBookId() === book.getBookId());
        if (index !== -1) {
            this.books.splice(index, 1);
            this.borrowedBooks.delete(book.getBookId());
        }
    }

    /**
     * Checks the sales (borrow count) of books in the library.
     */
    public checkSales(): void {   // This method checks the sales of books in the library.
        this.borrowedBooks.clear();
        for (const book of this.books) {
            const initialCopies = book.getAvailableCopies() + (this.borrowedBooks.get(book.getBookId()) || 0);
            const borrowed = initialCopies - book.getAvailableCopies();
            if (borrowed > 0) {
                this.borrowedBooks.set(book.getBookId(), borrowed);
            }
        }
    }

    /**
    * Displays all members in the system (implementation pending).
    */
    public viewAllMembers(): void { }


    /**
     * Returns the list of registered members.
     * @returns An array of members.
     */
    public getMembers(): Member[] {
        return this.members;
    }

    /**
    * Adds a new member to the library system.
    * @param member The member to add.
    */
    public addMember(member: Member): void {
        this.members.push(member);
    }

    /**
    * Returns the map of borrowed books and their counts.
    * @returns A map with book IDs and the number of times they were borrowed.
    */
    public getBorrowedBooks(): Map<string, number> {
        return this.borrowedBooks;
    }
}