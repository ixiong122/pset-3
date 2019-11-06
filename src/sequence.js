const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const firstNumber=Number(readlineSync.question("Enter three numbers.\n"));
const secondNumber=Number(readlineSync.question(""));
const thirdNumber=Number(readlineSync.question(""));

if (Number.isNaN(firstNumber, secondNumber)){
  console.log("Invalid.")
} else if (Number.isNaN(secondNumber)){
  console.log("Invalid.")
} else if (Number.isNaN(thirdNumber)){
  console.log("\nInvalid.")
} else if (firstNumber < MIN || firstNumber > MAX){
  console.log("\nInvalid.")
} else if (secondNumber < MIN || secondNumber > MAX){
  console.log("\nInvalid.")
} else if (thirdNumber < MIN || thirdNumber > MAX){
  console.log("\nInvalid.")
} else if (firstNumber == secondNumber && secondNumber==thirdNumber && firstNumber==thirdNumber){
  console.log("\nEqual");
} else if (firstNumber == secondNumber && secondNumber < thirdNumber || firstNumber < secondNumber && secondNumber==thirdNumber){
  console.log("\nIncreasing.");
} else if (firstNumber < secondNumber && secondNumber < thirdNumber ){
  console.log("\nStrictly increasing.");
} else if (firstNumber == secondNumber && secondNumber > thirdNumber || firstNumber > secondNumber && secondNumber < thirdNumber){
  console.log("\nDecreasing.");
} else if (firstNumber > secondNumber && secondNumber > thirdNumber){
  console.log("\nStrictly decreasing.");
} else {
  console.log("\nUnordered.");
}
