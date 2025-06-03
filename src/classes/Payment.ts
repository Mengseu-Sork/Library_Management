import { PaymentMethod } from "../Enums/PaymentMethod";

/**
 * Represents a payment made by a member.
 * Includes amount, payment method, and date of the transaction.
 */
export class Payment {
  /**
   * Creates a new payment instance.
   * @param amount The amount paid.
   * @param paymentMethod The method used for the payment.
   * @param date The date of the payment (defaults to the current date).
   */
  constructor(
    public amount: number,
    public paymentMethod: PaymentMethod,
    public date: Date = new Date()
  ) { }

  /**
  * Gets the payment details as a formatted string.
  * @returns A string describing the amount and payment method.
  */
  public getPaymentDetails(): string {
    return `${this.amount} paid via ${PaymentMethod[this.paymentMethod]}`;
  }

  /**
  * Gets the amount paid.
  * @returns The payment amount.
  */
  public getAmount(): number {
    return this.amount;
  }
}
