const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
let quarter= 0;
let dime= 0;
let nickel= 0;
let penny= 0;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {

console.log( quarter + " quarters, " + dime + " dimes, " + nickel + " nickels, " + penny + " pennies.");
}
