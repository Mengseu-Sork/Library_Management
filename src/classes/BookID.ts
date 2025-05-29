class BookID {
    constructor(private bookId: string, private amount: number) {
        this.amount = amount;
        this.bookId = bookId
    }

    getID(): string {
        return this.bookId;
    }
    getAmount(): number{
        return this.amount;
    }
}
