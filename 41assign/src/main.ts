// 41. Magicians: Make a array of magician’s names.
// Pass the array to a function
// called show_magicians(),
//  which prints the name of each magician in the array.

let megician: string[] = ["HHarry Potter", "Harmione Granger", "Ron Weaslay", "Albus Dumbledore"];
function show_magicians (megicians: string[]){
    megician.forEach(element =>{
        console.log(element);
    });

} 

show_magicians(megician);
