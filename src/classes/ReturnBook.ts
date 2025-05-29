import { Member } from "./Member";
export class ReturnBook {
    private member: Member;
    private book: ReturnBook;

    constructor(member: Member, book: ReturnBook) {
        this.member = member;
        this.book = book;
    }
    public returnDate() {}
    public IsNotified(): boolean | void {}
}