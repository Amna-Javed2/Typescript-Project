/*Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

Explain & TIP: Arrays can store multiple items like fruit names. Use if statements to check for specific fruits.*/

let fvrt_fruits: string[] = ["Apple","Mango","Orange","Grapes"];

if(fvrt_fruits.includes("Apple")){
console.log("You really like Apples!");
}

if (fvrt_fruits.includes("Mango")) {
    console.log("You really like mangoes!");
}

if (fvrt_fruits.includes("Orange")) {
    console.log("You really like oranges!");
}

if (fvrt_fruits.includes("Grapes")) {
    console.log("You really like grapes!");
} 

if (fvrt_fruits.includes("Banana")) {
    console.log("You really like banana!");
}
else{
    console.log("You don't like banana!");
}