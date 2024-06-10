/*Question 24:More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

Explain & TIP: Experiment with different types of conditions to see how they work. This builds a deeper
understanding of logic in programming.*/

let num: number = 42;
let num1: number = 24;
let num2: number = 50;
let num3: number = 60;
console.log('is num > num1 ? =', num > num1);       // true
console.log('is num1 > num ? = ', num1 > num);      // false
console.log('is num2 > num1 ? =', num2 > num1);     // true
console.log('is num3 > num1 ? =', num3 > num1);     // true
console.log('is num3 > num2 ? =', num3 > num2);     // true
console.log('is num 1 > num3 ? =', num1 > num3);    // false
console.log('is num2 > num3 ? =', num2 > num3);     // false 
console.log('is num => num1 ? =', num >= num1);     // true
console.log('is num <= num1 ? =', num <= num1);     // false
console.log('is num2 >= num1 ? =', num2 >= num1);   // true
console.log('is num3 >= num1 ? =', num3 >= num1);   // true
console.log('is num2 >= num3 ? =', num2 >= num3);   // false


let name1: string = '60';
let name2: string = '50';
console.log('is name2 === name1 ?= ', name2 === name1);   // === value or data type dono ko check krta hai ke vo equal hain ya nhi


let name3: string = 'amna';
let name4: string = 'AMNA';
console.log('is name3 === name4 ?= ', name3 === name4);
console.log('is name3 == name4 ?= ', name3 == name4);     // == equal bs value check krta hai ke vo equal hai ya nhi


if (num > num1 && num < num3) {
    console.log("Number is between num1 and num3");
} else if (num == num1 || num == num3) {
    console.log("Number is equal to either num1 or num3");
} else {
    console.log("Neither of the above conditions are true");
};


let myArray = [1, 2, 3, 4, 5];

const numToTest = 3;
if (myArray.includes(3)) {
    console.log(`${numToTest} is in the array.`);       // 3 b likh skty or variable name b jis mei 3 store hai
} else {
    console.log(`${numToTest} is not in the array.`);
}

const num1ToTest = 5;
if (myArray.includes(num1ToTest)) {                           
    console.log(`${num1ToTest} is in the array.`);
} else {
    console.log(`${num1ToTest} is not in the array.`);
}    

const num2ToTest = 9;
if (myArray.includes(num2ToTest)) {                           
    console.log(`${num2ToTest} is in the array.`);
} else {
    console.log(`${num2ToTest} is not in the array.`);
}  