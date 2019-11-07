const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const number = Number(readlineSync.question("\n\nEnter a number: "));
if (Number.isNaN(number)) {
    console.log("\nInvalid.");
} else if (number < MIN || number > MAX) {
    console.log("\nInvalid.");
} else if (number == 0){
  console.log("\nZero.");
} else if (number > 0){
  console.log("\nPositive.");
} else {
  console.log("\nNegative.");
}
