import {Member} from "./Member";
import { Book } from "./Book";

export class Librarian {
    private userName: string;
    private email: string;

    constructor(userName: string, email: string) {
        this.userName = userName;
        this.email = email;
    }

    public login() {}
    public addBook() {}
    public updateBook() {}
    public removeBook() {}
    public checkSales() {}
    public viewAllMembers():void {}
}