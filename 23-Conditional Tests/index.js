"use strict";
/*Question 23:Conditional Tests: Write a series of conditional tests.
 Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you
understand how conditions work in programming.*/
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10;
// Test 1
console.log("Is num equal to 10? I predict True.");
console.log(num == 10);
// Test 2
console.log("Is num not equal to 5? I predict True.");
console.log(num != 5);
// Test 3
console.log("Is num greater than 5? I predict True.");
console.log(num > 5);
// Test 4
console.log("Is num less than or equal to 10? I predict True.");
console.log(num <= 10);
// Test 5
console.log("Is num not equal to '10'? I predict false.");
console.log(num !== 10);
let name1 = 'John';
// Test 6
console.log("Is name equal to 'John'? I predict True.");
console.log(name1 == 'John');
// Test 7
console.log("Is name not equal to 'Mary'? I predict True.");
console.log(name1 != 'Mary');
// Test 8
console.log("Is name length greater than 3? I predict True.");
console.log(name1.length > 3);
// Test 9
console.log("Is name equal to 10? I predict True.");
console.log(num === 10);
// Test 10
console.log("Is num less than or equal to 10? I predict True.");
console.log(num >= 10);
