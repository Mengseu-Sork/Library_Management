import { Payment } from "./Payment";
import { FineStatus } from "../Enums/FineStatus";

export class Fine {
  constructor(
    private amount: number,
    private status: FineStatus
  ) {}

  public receivePayment(payment: Payment): void {
    if (payment.getAmount() >= this.amount) {
      this.status = FineStatus.PAID;
    }
  }
}