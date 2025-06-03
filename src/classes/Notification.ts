import { Book } from "./Book";
import { Member } from "./Member";
export class Notification {
  constructor(
    private name: string,
    private email: string,
    private message: string,
    private date: Date,
    private book: Book,
    private member: Member
  ) {}
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getDate(): Date {
    return this.date;
  }
  public getBook(): Book {
    return this.book;
  }

  public send(): void {
    console.log(`Notification sent to ${this.member.getFirstName()}: ${this.message}`);
  }
}