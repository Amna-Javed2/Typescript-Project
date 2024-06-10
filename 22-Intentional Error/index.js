"use strict";
/*Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with
this helps you understand array boundaries.*/
Object.defineProperty(exports, "__esModule", { value: true });
let friends = ["Amna", "Abeera", "Noor"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Noor";
// array mei last value index 2 pe hai 3 index nhi hai
