const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("\n\nEnter a year: "));

if (Number.isNaN(year)){
  console.log("Invalid.");
} else if (year < MIN || year > MAX){
  console.log("Invalid.");
} else if (year % 4 == 0 || year % 400 !== 0){
  console.log("\n" + year + " is a leap year.");
}else if (year % 400 == 0){
  console.log("\n" + year + " is a leap year.");
} else {
  console.log("\n" + year + " is not a leap year.");
}
