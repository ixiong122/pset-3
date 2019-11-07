const readlineSync=require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const temperature = readlineSync.question("\n\nEnter a temperature: ");
let scale = readlineSync.question("Enter a scale: ");
scale = scale.toUpperCase();
if (Number.isNaN(temperature)){
  console.log("\nInvalid.");
} else if (temperature < MIN || temperature > MAX){
  console.log("\nInvalid.");
} else if (scale =="F"){
  if (temperature <= 32) {
    console.log("\nSolid.");
  } else if (temperature > 32 && temperature < 212){
    console.log("\nLiquid.");
  } else {
    console.log("\nGas.");
}
} else if (scale == "C"){
  if (temperature <= 0) {
      console.log("\nSolid.");
  } else if (temperature > 0 && temperature < 100){
      console.log("\nLiquid.");
  } else {
      console.log("\nGas.");
  }
} else if (scale == "K"){
   if (temperature <= 273.15) {
     console.log("\nSolid.");
   } else if (temperature > 273.15 && temperature < 373.15){
      console.log("\nLiquid.");
   } else {
      console.log("\nGas.");
}
}
