// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let Guest_list: string[] = [
  "Ms. Hina Naseer",
  "Sir Zia Khan",
  "Sir Kamran Khan Tessori",
];

// for(let i=0; i<Guest_list.length; i++)
// {
//  console.log('Dear Mr./Ms. ' + Guest_list[i] + ', \n\nit is our pleasure to invite you in our party.\n\nthanking you!\n\n'  )
// }

// changing of guest due to absent of a guest

let absent_guest: string = "Sir Kamran Khan Tessori ";

let new_guest: string = "Sir Ameen Alam";

Guest_list[2] = new_guest;

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Mr./Ms. " +
      Guest_list[i] +
      ", \n\nit is our pleasure to invite you in our party.\n\nthanking you!"
  );
}
console.log(`Mr.${absent_guest}  is not coming to the party. \n\n`);

// . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

console.log(
  "good news for all. we find a big table so we are inviting three more guest"
);

Guest_list.unshift("Bilawal Bhutto Zardari");

Guest_list.splice(2, 0, "Dr. Abdul Qadeer Khan ");

Guest_list.push("Anwar Maqsood");

for (let i = 0; i < Guest_list.length; i++) {
  console.log(
    "Dear Mr./Ms. " +
      Guest_list[i] +
      ", \n\nit is our pleasure to invite you in our party.\n\nthanking you!"
  );
}
