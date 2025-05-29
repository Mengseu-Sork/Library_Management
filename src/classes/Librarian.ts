import { Member } from "./Member";
export class Librarian {
    private userName: string;
    private email: string;

    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }
    getUserName(): string{
        return this.userName;
    }
    getEmail(): string{
        return this.email;
    }

    public login() {}
    public addBook() {}
    public updateBook() {}
    public removeBook() {}
    public checkSales() {}
    public viewAllMembers(): Member[] | void {}
}