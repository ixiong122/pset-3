const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const grade = Number(readlineSync.question("Enter a grade:"));

if (Number.isNaN(grade)){
  console.log("\nInvalid.");
} else if (grade < MIN || grade > MAX){
  console.log("\nInvalid.");
} else if (grade >= 90 && grade <= 100){
  console.log("\nYou received an A.");
} else if (grade >= 80 && grade <= 89){
  console.log("\nYou received a B.");
} else if (grade >= 70 && grade <= 79){
  console.log("\nYou received a C.");
} else if (grade >= 60 && grade <= 69){
  console.log("\nYou received a D.");
} else if (grade >=0 && grade <= 59){
  console.log("\nYou received a F.");
}
