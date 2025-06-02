import { PaymentMethod} from "../Enums/PaymentMethod";
export class Payment {
  constructor(
    public amount: number,
    public paymentMethod: PaymentMethod,
    public date: Date = new Date()
  ) {}

  public getPaymentDetails(): string {
    return `${this.amount} paid via ${PaymentMethod[this.paymentMethod]}`;
  }

  public getAmount(): number {
    return this.amount;
  }
}
