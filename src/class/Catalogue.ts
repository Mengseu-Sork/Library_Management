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
    getAuhtor(){
        return this.Author;
    }
    getBookName(){
        return this.BookName;
    }
    getBookID(){
        return this.BookID;
    }
    getBookType(){
        return this.BookType;
    }
    getDataAdd(){
        return this.DataAdd;
    }

    searchByName(name: string) {}
    searchByAuthor(author: string) {}
    selectByCategory(category: string) {}
    selectByYear(year: number) {}
}
