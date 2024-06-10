
console.log('The Orignal Magicians Array');
let magicians:string[]=['Amna','Noor','Ibrahim'];

function show_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magicians);

console.log('The Modify Magicians Array');

function great_magician(magicians:string[]){
    magicians.forEach(magician => {
        console.log(`The Great Magician is ${magician}.`);
    });
}
great_magician(magicians);