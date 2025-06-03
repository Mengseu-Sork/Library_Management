import { BookFormat } from "../Enums/BookFomat";

/**
 * Represents a book in the library system.
 */
export class Book {
    private bookId: string;
    private bookTitle: string;
    private bookType: string;
    private author: string;
    private createYear: number;
    private isbnNumber: string;
    private availableCopies: number;
    private format: BookFormat;

    /**
     * Constructs a new Book instance.
     * @param bookId A unique identifier for the book.
     * @param bookTitle The title of the book.
     * @param bookType The type or genre of the book.
     * @param author The author of the book.
     * @param createYear The year the book was published or created.
     * @param isbnNumber The ISBN number of the book.
     * @param availableCopies The number of available copies for borrowing.
     * @param format The format of the book (PHYSICAL or DIGITAL).
     */
    constructor(
        bookId: string,
        bookTitle: string,
        bookType: string,
        author: string,
        createYear: number,
        isbnNumber: string,
        availableCopies: number,
        format: BookFormat
    ) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookType = bookType;
        this.author = author;
        this.createYear = createYear;
        this.isbnNumber = isbnNumber;
        this.availableCopies = availableCopies;
        this.format = format;
    }

    /** @returns The unique identifier of the book. */
    public getBookId(): string {
        return this.bookId;
    }

    /** @returns The title of the book. */
    public getBookTitle(): string {
        return this.bookTitle;
    }

    /** @returns The type or genre of the book. */
    public getBookType(): string {
        return this.bookType;
    }

    /** @returns The author of the book. */
    public getAuthor(): string {
        return this.author;
    }

    /** @returns The year the book was created or published. */
    public getCreateYear(): number {
        return this.createYear;
    }

    /** @returns The ISBN number of the book. */
    public getIsbnNumber(): string {
        return this.isbnNumber;
    }

    /** @returns The number of available copies. */
    public getAvailableCopies(): number {
        return this.availableCopies;
    }

    /** @returns The format of the book (PHYSICAL or DIGITAL). */
    public getFormat(): BookFormat {
        return this.format;
    }

    /**
     * Updates the number of available copies in stock.
     * @param amount The number of copies to add (positive) or remove (negative).
     * @returns True if the update was successful; false if it would result in negative stock.
     */
    public updateStock(amount: number): boolean {
        if (this.availableCopies + amount >= 0) {
            this.availableCopies += amount;
            console.log(`Stock for "${this.bookTitle}" updated to ${this.availableCopies}.`);
            return true;
        }
        console.error("Cannot reduce stock below zero.");
        return false;
    }

    /**
     * Checks if the book is available for borrowing.
     * @returns True if at least one copy is available; otherwise false.
     */
    public isAvailable(): boolean {
        return this.availableCopies > 0;
    }

    /**
     * Borrows one copy of the book, reducing available stock.
     * Logs an error if no copies are available.
     */
    public borrowCopy(): void {
        if (this.isAvailable()) {
            this.availableCopies--;
            console.log(`One copy of "${this.bookTitle}" borrowed. Available: ${this.availableCopies}`);
        } else {
            console.error(`No copies of "${this.bookTitle}" available for borrowing.`);
        }
    }

    /**
     * Returns one copy of the book, increasing available stock.
     */
    public returnCopy(): void {
        this.availableCopies++;
        console.log(`One copy of "${this.bookTitle}" returned. Available: ${this.availableCopies}`);
    }
}
