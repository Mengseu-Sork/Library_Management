export class Payment {
    private _amount: number;
    private paymentMethod: PaymentMethod;
    private _date: Date;


    constructor(amount: number, method: PaymentMethod) {
        this._amount = amount;
        this.paymentMethod = method;
        this._date = new Date();
    }

    getAmount(): number {
        return this._amount;
    }

    getMethod(): PaymentMethod {
        return this.paymentMethod;
    }

    getDate(): Date {
        return this._date;
    }


    getPaymentDetails(): string {
        return `Amount: $${this._amount.toFixed(2)}, Method: ${this.paymentMethod}, Date: ${this._date.toLocaleDateString()}`;
    }
}