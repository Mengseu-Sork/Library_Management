export class Catalogue {
  constructor(
    private Author: string,
    private BookName: string,
    private BookID: number,
    private BookType: string,
    private DataAdd: number
  ) {
    this.Author = Author;
    this.BookName = BookName;
    this.BookID = BookID;
    this.BookType = BookType;
    this.DataAdd = DataAdd;
    }
    getAuhtor(): string{
        return this.Author;
    }
    getBookName(): string{
        return this.BookName;
    }
    getBookID(): number{
        return this.BookID;
    }
    getBookType(): string{
        return this.BookType;
    }
    getDataAdd(): number{
        return this.DataAdd;
    }

    searchByName(name: string) {}
    searchByAuthor(author: string) {}
    selectByCategory(category: string) {}
    selectByYear(year: number) {}
}
