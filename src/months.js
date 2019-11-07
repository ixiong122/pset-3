const readlineSync = require("readline-sync");

let month = readlineSync.question("\n\nEnter a month: ");
month = month.toLowerCase();
if(month == "jan" || month == "january" || month == "mar" || month == "march" || month == "may" || month == "jul" || month =="july"|| month == "sep" || month == "september"|| month == "oct"|| month == "october" || month == "dec" || month == "december"){
  console.log("\n31 days.");
} else if(month == "feb" || month == "february"){
  console.log("\n28 or 29 days.");
} else if (month == "apr" || month == "april" || month == "jun" || month == "june" || month == "aug" || month == "august" || month == "nov"|| month == "november"){
  console.log("\n30 days.");
} else {
  console.log("\nInvalid.");
}
