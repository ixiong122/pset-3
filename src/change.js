const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
const quarter = Math.floor(amount / 0.25);
const remainder = amount % 0.25;
const dime = Math.floor(remainder / 0.1);
const remainder2 = remainder % 0.1;
const nickel = Math.floor(remainder2 / 0.05);
const remainder3 = remainder2 % 0.05;
const penny = Math.round(remainder3 / 0.01);
console.log("\n"+ quarter + " quarters, " + dime + " dimes, " + nickel + " nickels, " + penny + " pennies.");
}
