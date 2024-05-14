"use strict";
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
let magician = ["HHarry Potter", "Harmione Granger", "Ron Weaslay", "Albus Dumbledore"];
function copyArray(array) {
    return [...array];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great  ' + magicianArray[i];
    }
}
function show_magicians(megicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
const cipyMagicianArry = copyArray(magician);
copyArray(magician);
make_great(magician);
console.log('\n\n This is my origninal Array');
show_magicians(magician);
console.log('\n\n This is my modified array ');
show_magicians(cipyMagicianArry);
