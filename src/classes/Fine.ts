import { Payment } from "./Payment";
import { FineStatus } from "../Enums/FineStatus";

export class Fine {
  constructor(
    public amount: number,
    public status: FineStatus = FineStatus.UNPAID
  ) {}

  public receivePayment(payment: Payment): void {
    if (payment.getAmount() >= this.amount) {
      this.status = FineStatus.PAID;
      console.log(`Fine of $${this.amount} is now paid.`);
    } else {
      console.log(`Partial payment received. Fine remains unpaid.`);
    }
  }
}
