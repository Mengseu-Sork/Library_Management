import { Register } from "./Register";

export class Member {
  private user: Register;

  constructor(user: Register) {
    this.user = user;
  }

  getMemberID(): number | string {
    return this.user.getId();
  }

  getFirstName(): string {
    return this.user.getFirstName(); // must add this method in Register
  }

  getLastName(): string {
    return this.user.getLastName(); // must add this method in Register
  }

  getEmail(): string {
    return this.user.getEmail();
  }

  getPhoneNumber(): string {
    return this.user.getPhone(); // must add this method in Register
  }

  viewBorrow(): void {
    console.log(`📚 Showing books borrowed by ${this.getEmail()}`);
  }

  reviewBook(book: string, rating: number, comment: string): void {
    console.log(`📝 ${this.getEmail()} reviewed "${book}" with ${rating}/5 stars. Comment: ${comment}`);
  }

  returnBook(book: string): void {
    console.log(`📦 ${this.getEmail()} returned the book: ${book}`);
  }
}
