const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("Enter a year: "));

if (Number.isNaN(year)){
  console.log("Invalid.");
}
else if (year < MIN || year > MAX){
  console.log("Invalid.");
} else if (year % 1 !== 0){
  console.log("\nInvalid.");
} else if (year % 4==0 && year % 400==0){
  console.log("\n"+year + " is a leap year.");
} else {
  console.log("\n"+year + " is not a leap year.");
}
