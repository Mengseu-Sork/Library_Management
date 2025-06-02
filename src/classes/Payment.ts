import { PaymentMethod} from "../Enums/PaymentMethod";
export class Payment {
  constructor(
    private amount: number,
    private paymentMethod: PaymentMethod,
    private date: Date = new Date()
  ) {}

  public getPaymentDetails(): string {
    return `${this.amount} paid via ${PaymentMethod[this.paymentMethod]}`;
  }

  public getAmount(): number {
    return this.amount;
  }
}
