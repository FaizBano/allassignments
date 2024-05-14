"use strict";
// a program to invite the guest
let Guest_list = ['Ms. Hina Naseer', 'Sir Zia Khan', 'Sir Kamran Khan Tessori'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr./Ms. ' + Guest_list[i] + ', \n\nit is our pleasure to invite you in our party.\n\nthanking you!\n\n');
}
// changing of guest
let absent_guest = "Sir Kamran Khan Tessori ";
let new_guest = "Ameen Alam";
Guest_list[2] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr./Ms. ' + Guest_list[i] + ', \n\nit is our pleasure to invite you in our party.\n\nthanking you!');
}
console.log(`Mr.${absent_guest}  is not coming to the party. `);
