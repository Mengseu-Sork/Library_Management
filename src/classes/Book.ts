import { BookFormat } from "../Enums/BookFomat";
export class Book {
    private bookId: string;
    private bookTitle: string;
    private bookType: string;
    private author: string;
    private createYear: number;
    private isbnNumber: string;
    private availableCopies: number;
    private format: BookFormat;

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


    public getBookId(): string {
        return this.bookId;
    }

    public getBookTitle(): string {
        return this.bookTitle;
    }

    public getBookType(): string {
        return this.bookType;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getCreateYear(): number {
        return this.createYear;
    }

    public getIsbnNumber(): string {
        return this.isbnNumber;
    }

    public getAvailableCopies(): number {
        return this.availableCopies;
    }

    public getFormat(): BookFormat {
        return this.format;
    }


    updateStock(amount: number): boolean {
        if (this.availableCopies + amount >= 0) {
            this.availableCopies += amount;
            console.log(`Stock for "${this.bookTitle}" updated to ${this.availableCopies}.`);
            return true;
        }
        console.error("Cannot reduce stock below zero.");
        return false;
    }

    isAvailable(): boolean {
        return this.availableCopies > 0;
    }

    borrowCopy(): void {
        if (this.isAvailable()) {
            this.availableCopies--;
            console.log(`One copy of "${this.bookTitle}" borrowed. Available: ${this.availableCopies}`);
        } else {
            console.error(`No copies of "${this.bookTitle}" available for borrowing.`);
        }
    }

    returnCopy(): void {
        this.availableCopies++;
        console.log(`One copy of "${this.bookTitle}" returned. Available: ${this.availableCopies}`);
    }
}
