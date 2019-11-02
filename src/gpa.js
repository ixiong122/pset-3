const readlineSync = require("readline-sync");

const letterGrade= readlineSync.question("Enter a letter grade: ");

switch(letterGrade){
  case "A+":
    console.log("Your GPA is 4.00");
    break;
  case "A":
    console.log("Your GPA is 4.00");
    break;
  case "A-":
    console.log("Your GPA is 3.67.");
    break;

}
