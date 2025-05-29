export class Member {
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
    getFirstName(){
        return this.firstName;
    }
    getLastNmae(){
        return this.lastName;
    }
    getEmail(){
        return this.email;
    }
    getPhoneNumber(){
        return this.phoneNumber;
    }

    viewBorrow() {}
    reviewBook(book: Book, rating: number, comment: string) {}
    returnBook(book: Book) {}

}