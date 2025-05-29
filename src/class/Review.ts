import { Book } from "./Book";
import { Member } from "./Member";
export class Review {
    private bookId: Book[];
    private member: Member;
    private rating: number;
    private comment: string;
    private reviewDate: Date;

    constructor(bookId: Book[], member: Member, rating: number, comment: string) {
        this.bookId = bookId;
        this.member = member;
        this.rating = rating;
        this.comment = comment;
        this.reviewDate = new Date();
    }
}