import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("mario", "work on the website", 500);
const invTwo = new Invoice("luigi", "work on the website", 300);
//impose typegaurd so only invoices created using the Invoice class are added into the array
let invoices = [];
invoices.push(invOne);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
