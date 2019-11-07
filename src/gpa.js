const readlineSync = require("readline-sync");

let letterGrade= readlineSync.question("\n\nEnter a letter grade: ");
letterGrade=letterGrade.toUpperCase();
switch(letterGrade){
  case "A+":
    console.log("\nYour GPA is 4.00");
    break;
  case "A":
    console.log("\nYour GPA is 4.00");
    break;
  case "A-":
    console.log("\nYour GPA is 3.67.");
    break;
  case "B+":
    console.log("\nYour GPA is 3.33.");
    break;
  case "B":
    console.log("\nYour GPA is 3.00.");
    break;
  case "B-":
    console.log("\nYour GPA is 2.67.");
    break;
  case "C+":
    console.log("\nYour GPA is 2.33.");
    break;
  case "C":
    console.log("\nYour GPA is 2.00.");
    break;
  case "C-":
    console.log("\nYour GPA is 1.67.");
    break;
  case "D+":
    console.log("\nYour GPA is 1.33.");
    break;
  case "D":
    console.log("\nYour GPA is 1.00.");
    break;
  case "D-":
    console.log("\nYour GPA is 0.67.");
    break;
  case "F":
    console.log("\nYour GPA is 0.00.");
    break;

}
