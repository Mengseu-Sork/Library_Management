import { Book } from "./Book";
export class Catalogue {
    private books: Book[];

    /**
     * Constructs a new, empty Catalogue instance.
     */
    constructor() {
        this.books = [];
    }

    /**
     * Adds a new book to the catalogue.
     * @param book The Book object to be added.
     */
    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Book "${book.getBookTitle()}" added to catalogue.`);
    }

    /**
     * Searches for books by name.
     * @param name A partial or full book title to search for (case-insensitive).
     * @returns An array of Book objects whose titles match the search string.
     */
    public searchByName(name: string): Book[] {
        console.log(`Searching for books with name containing "${name}"...`);
        return this.books.filter(book =>
            book.getBookTitle().toLowerCase().includes(name.toLowerCase())
        );
    }

    /**
     * Searches for books by author.
     * @param author A partial or full author name to search for (case-insensitive).
     * @returns An array of Book objects by the specified author.
     */
    public searchByAuthor(author: string): Book[] {
        console.log(`Searching for books by author containing "${author}"...`);
        return this.books.filter(book =>
            book.getAuthor().toLowerCase().includes(author.toLowerCase())
        );
    }

    /**
     * Selects a book by its unique ID.
     * @param bookId The unique identifier of the book.
     * @returns The Book object if found; otherwise, undefined.
     */
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

    /**
     * Selects all books published in a specific year.
     * @param year The year of publication.
     * @returns An array of Book objects created in the specified year.
     */
    public selectByYear(year: number): Book[] {
        console.log(`Searching for books created in year ${year}...`);
        return this.books.filter(book => book.getCreateYear() === year);
    }

    /**
     * Retrieves all books currently in the catalogue.
     * @returns An array of all Book objects in the catalogue.
     */
    public getAllBooks(): Book[] {
        return [...this.books];
    }
}
