import { Book } from "./Book";
import { Member } from "./Member";



/**
 * Represents a notification sent to a library member.
 * Includes recipient details, message, date, and related book information.
 */
export class Notification {
  /**
  * Creates a new notification instance.
  * @param name The name of the recipient.
  * @param email The email of the recipient.
  * @param message The message content of the notification.
  * @param date The date the notification is sent.
  * @param book The book related to the notification.
  * @param member The member to whom the notification is sent.
  */
  constructor(
    private name: string,
    private email: string,
    private message: string,
    private date: Date,
    private book: Book,
    private member: Member
  ) { }

  /**
   * Gets the recipient's name.
   * @returns The name of the recipient.
   */
  public getName(): string {
    return this.name;
  }
  /**
   * Gets the recipient's email address.
   * @returns The email of the recipient.
   */
  public getEmail(): string {
    return this.email;
  }
  /**
   * Gets the date the notification was sent.
   * @returns The notification date.
   */
  public getDate(): Date {
    return this.date;
  }
  /**
   * Gets the book related to the notification.
   * @returns The associated book.
   */
  public getBook(): Book {
    return this.book;
  }

  /**
  * Sends the notification to the member.
  * Outputs the message to the console.
  */
  public send(): void {
    console.log(`Notification sent to ${this.member.getFirstName()}: ${this.message}`);
  }
}