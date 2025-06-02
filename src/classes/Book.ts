
 export class Book {
  constructor(
    private BookID:string,
    private BookName: string,
    private BookType: string,
    private Author: string,
    private Category: string,
    private CreateYear: number,
    private AvailableNumber: number
  ) {
    this.BookName = BookName;
    this.BookID = BookID;
    this.BookType = BookType;
    this.Author = Author;
    this.Category = Category;
    this.CreateYear = CreateYear;
    this.AvailableNumber = AvailableNumber;
    }
    getBookIDs(): string {
        return this.BookID;
    }

    getBookName(): string {
        return this.BookName;
    }

    getBookType(): string {
        return this.BookType;
    }

    getAuthor(): string {
        return this.Author;
    }

    getCategory(): string {
        return this.Category;
    }

    getCreateYear(): number {
        return this.CreateYear;
    }

    getAvailableNumber(): number {
        return this.AvailableNumber;
    }

    isAvailable(): boolean {
        return this.AvailableNumber > 0;
    }

    borrowCopy(): boolean {
        if (this.AvailableNumber > 0) {
        this.AvailableNumber--;
        return true;
        }
        return false;
    }

    returnCopy(): void {
        this.AvailableNumber++;
    }

    updateStock(amount: number): void {
        this.AvailableNumber += amount;
        if (this.AvailableNumber < 0) {
            this.AvailableNumber = 0;
            }
        }

}
