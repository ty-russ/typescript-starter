import { hasFormatter } from "../interfaces/hasFormatter.js";

//class
export class Invoice implements hasFormatter {
  readonly client: string; //cannot be changed
  private details: string; //access inside class only
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  //method
  format() {
    return ` ${this.client} owes $${this.amount} for ${this.details}`;
  }
}
