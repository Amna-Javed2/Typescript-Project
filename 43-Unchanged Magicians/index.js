"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('The Orignal Magicians Array');
let magicians = ['Amna', 'Noor', 'Ibrahim'];
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magicians);
console.log('The Modify Magicians Array');
function great_magician(magicians) {
    magicians.forEach(magician => {
        console.log(`The Great Magician is ${magician}.`);
    });
}
great_magician(magicians);
