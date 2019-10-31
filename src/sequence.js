const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
const firstNumber=readlineSync.question("Enter three numbers.\n");
const secondNumber=readlineSync.question("");
const thirdNumber=readlineSync.question("");
if (Number.isNaN(firstNumber)){
  console.log("Invalid.")
}
else if (Number.isNaN(secondNumber)){
  console.log("Invalid.")
}
else if (Number.isNaN(thirdNumber)){
  console.log("Invalid.")
}
else if (firstNumber < MIN || firstNumber > MAX){
  console.log("Invalid.")
}
else if (secondNumber < MIN || secondNumber > MAX){
  console.log("Invalid.")
}
else if (thirdNumber < MIN || thirdNumber > MAX){
  console.log("Invalid.")
}
else if (firstNumber == secondNumber == thirdNumber){
  console.log("Equal");
}
