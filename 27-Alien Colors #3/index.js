"use strict";
/*Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.*/
Object.defineProperty(exports, "__esModule", { value: true });
let alienColor = "green";
if (alienColor == "green") {
    console.log("You earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("You earned 10 points.");
}
else if (alienColor == "red") {
    console.log("You earned 15 points.");
}
alienColor = "yellow";
if (alienColor == "green") {
    console.log("You earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("You earned 10 points.");
}
else if (alienColor == "red") {
    console.log("You earned 15 points.");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("You earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("You earned 10 points.");
}
else if (alienColor == "red") {
    console.log("You earned 15 points.");
}
