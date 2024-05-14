"use strict";
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
//\ • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
Object.defineProperty(exports, "__esModule", { value: true });
// test no.1
let car = 'subaru';
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// test no.2
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// test no.3
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'hnoda');
// test no.4
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');
// test no.5
console.log("is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// test no.6
console.log("car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU');
// test no.7
console.log("is car === 'SUBARU'? I predict false.");
console.log(car === 'SUBARU');
// test no.8
console.log("is car === 'truck'? I predict false.");
console.log(car === 'Truck');
// test no.9
console.log("is car === 'cart'? I predict false.");
console.log(car === 'cart');
// test no.10
console.log("is car === 'honda'? I predict false.");
console.log(car === 'honda');
