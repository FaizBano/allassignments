"use strict";
// A veriable is created
let alien_color = "green";
// Write an if statement to test whether the alien’s color is green
if (alien_color === "green") {
    // If it is, print a message that the player just earned 5 points.
    console.log("the player just earned 5 points !!! ");
}
// if test and another that fails. (The version that fails will have no output.)
alien_color = "red";
if (alien_color === "green") {
    console.log("the player just earned 5 points !!! ");
}
