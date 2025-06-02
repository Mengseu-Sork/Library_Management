
import { Book } from "./Book";

export class Catalogue {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.getBookTitle()}" added to catalogue.`);
    }

    public searchByName(name: string): Book[] {
        console.log(`Searching for books with name containing "${name}"...`);
        return this.books.filter(book =>
            book.getBookTitle().toLowerCase().includes(name.toLowerCase())
        );
    }

    public searchByAuthor(author: string): Book[] {
        console.log(`Searching for books by author containing "${author}"...`);
        return this.books.filter(book =>
            book.getAuthor().toLowerCase().includes(author.toLowerCase())
        );
    }


    public selectBook(bookId: string): Book | undefined {
        console.log(`Attempting to select book with ID "${bookId}"...`);
        const book = this.books.find(b => b.getBookId() === bookId);
        if (book) {
            console.log(`Book "${book.getBookTitle()}" selected.`);
        } else {
            console.log(`Book with ID "${bookId}" not found in catalogue.`);
        }
        return book;
    }


    public selectByYear(year: number): Book[] {
        console.log(`Searching for books created in year ${year}...`);
        return this.books.filter(book => book.getCreateYear() === year);
    }

    public getAllBooks(): Book[] {
        return [...this.books];
    }
}
