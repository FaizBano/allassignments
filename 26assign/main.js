"use strict";
// 26. Alien Colors #2: C26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
let alien_colors = "green";
// write an if-else chain.// • If the alien’s color is green,
if (alien_colors === "green") {
    // print a statement that the player just earned 5 points for shooting the alien.
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
alien_colors = "red";
if (alien_colors === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
