
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color lien.

let alien_color : string = "green";

if(alien_color=== "green"){
    console.log("VERSION 1...the player earned 5 points.")
    
}
else if (alien_color === "yellow"){
    console.log("The palayer earn 10 points")
}
else if(alien_color === "red"){
    console.log("The Player earned 15 points")

}
else {
    console.log("please select correct color");
}

alien_color = "yellow"

if(alien_color === "green"){
    console.log("the player earned 5 points." );   
}

else if (alien_color === "yellow"){
    console.log("VERSION 2....The palayer earn 10 points")
}
else if(alien_color === "red"){
    console.log("The Player earned 15 points")

}
else {
    console.log("please select correct color");
}

alien_color = "red"
if(alien_color=== "green"){
    console.log("the player earned 5 points.")
    
}
else if (alien_color === "yellow"){
    console.log("The palayer earn 10 points")
}
else if(alien_color === "red"){
    console.log("VERSION 3.....The Player earned 15 points")

}
else {
    console.log("please select correct color");
}
