class Member {
  constructor(
    public memberID: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string
  ) {}

  viewBorrow() {}
  reviewBook(book: Book, rating: number, comment: string) {}
  returnBook(book: Book) {}
}