class Member {
  constructor(
    private memberID: string,
    private firstName: string,
    private lastName: string,
    private email: string,
    private phoneNumber: string
  ) {
    this.memberID = memberID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
  getMemberID(){
    return this.memberID;
  }
  getFirstName(): string {
    return this.firstName;
    }
  getLastName(): string{
    return this.lastName;
  }
  getEmail(): string{
    return this.email;
  }
  getPhoneNumber():string{
    return this.phoneNumber;
  }

  viewBorrow() {}
  reviewBook(book: Book, rating: number, comment: string) {}
  returnBook(book: Book) {}
}