const readlineSync=require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const temperature = readlineSync.question("Enter a temperature: ");
let scale = readlineSync.question("Enter a scale: ");
scale=scale.toUpperCase();
if (Number.isNaN(temperature)){
  console.log("\nInvalid.");
} else if (temperature < MIN || temperature > MAX){
  console.log("\nInvalid.");
} else if (scale = "F"){
  console.log("\nInvalid.");
} else if (scale = "C"){
  console.log("\nInvalid.");
} else if (scale = "K"){
  console.log("\nInvalid.");
}
