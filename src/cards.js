const readlineSync = require("readline-sync");

let playingCard = readlineSync.question("\n\nEnter a playing card: ");
playingCard = playingCard.toUpperCase();

if(playingCard.indexOf(2) == 0){
    let rank = "2";
} else if(playingCard.indexOf(3) == 0){
    rank = "3";
} else if(playingCard.indexOf(4) == 0){
    rank = "4";
} else if(playingCard.indexOf(5) == 0){
    rank = "5";
} else if(playingCard.indexOf(6) == 0){
    rank = "6";
} else if(playingCard.indexOf(7) == 0){
    rank = "7";
} else if(playingCard.indexOf(8) == 0){
    rank = "3";
} else if(playingCard.indexOf(9) == 0){
    rank = "9";
} else if(playingCard.indexOf(10) == 0){
    rank = "10";
} else if(playingCard.indexOf("J") == 0){
    rank = "Jack";
} else if(playingCard.indexOf("Q") == 0){
    rank = "Queen";
} else if(playingCard.indexOf("K") == 0){
    rank = "King";
} else if(playingCard.indexOf("A") == 0){
    rank = "Ace";
}

if(playingCard.indexOf("C") == 1){
    suits = "Clubs";
} else if(playingCard.indexOf("D") == 1){
    suits = "Diamonds";
} else if(playingCard.indexOf("H") == 1){
    suits = "Hearts";
} else if(playingCard.indexOf("S") == 1){
    suits = "Spades";
}
console.log("\n"+ rank + " of " + suits + ".");
