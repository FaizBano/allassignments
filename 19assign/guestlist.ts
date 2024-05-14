// a program to invite the guest
let Guest_list: string[] = [
  "Ms. Hina Naseer",
  "Sir Zia Khan",
  "Sir Kamran Khan Tessori",
];

// for(let i=0; i<Guest_list.length; i++)
// {
//  console.log('Dear Mr./Ms. ' + Guest_list[i] + ', \n\nit is our pleasure to invite you in our party.\n\nthanking you!\n\n'  )
// }

// changing of guest

let absent_guest: string = "Sir Kamran Khan Tessori ";
let new_guest: string = "Sir Ameen Alam";
Guest_list[2] = new_guest;
// for(let i=0; i<Guest_list.length; i++)
// {
//  console.log('Dear Mr./Ms. ' + Guest_list[i] + ', \n\nit is our pleasure to invite you in our party.\n\nthanking you!')
// }`

// console.log(`Mr.${absent_guest}  is not coming to the party. \n\n`);
// console.log(
//   "good news for all. we find a big table so we areinviting three more guest"
// );
Guest_list.unshift("Danyal Nagori");
Guest_list.splice(2, 0, "Dr. Abdul Qadeer Khan ");
Guest_list.push("Anwar Maqsood");

// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "\n\nDear Mr./Ms. " +
//       Guest_list[i] +
//       ", \n\nit is our pleasure to invite you in our party.\n\nthanking you!"
//   );
// }       
while (Guest_list.length > 2) {
  let remove_guest = Guest_list.pop();

//   console.log(`sorry Mr. ${remove_guest}, you are not invited for the dinne.`);
}

// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     "Dear Mr./Ms. " +
//       Guest_list[i] +
//       ", \n\nit you are still invited in  party.\n\nthanking you!"
//   );
// }
Guest_list.splice(0, 2);
console.log(Guest_list);

//  . Dinner Guests: Working with one of the programs from Exercises 14 
// through 18, print a message indicating the number of people you are
//  inviting to dinner.

console.log(`the remaing guest are: ${Guest_list.length}`);
