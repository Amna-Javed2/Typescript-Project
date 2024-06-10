"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["A", "B", "C"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
