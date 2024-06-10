/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with 
this helps you understand array boundaries.*/


let friends: string[] = ["Amna", "Abeera", "Noor"];

console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Noor";
// array mei last value index 2 pe hai 3 index nhi hai

