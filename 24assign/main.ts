// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 
// 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// Equaility Test
console.log("equaility test with string :  " , "Computer" === "Computer");

//  Inequaility Test
console.log("Inequaility test with string :  " , ("Computer") as string != "calculator");


// Teat using the Lower Case function
console.log("test using the lower case test: " , "PAKISTAN".toLowerCase() === "pakistan" );

// equality test with number.
console.log("Equaility test with number: ", 101 === 101);

// Inequality test with number.
console.log("INequaility test with number: ", (101) as number != 55);


//  greater than test
console.log("equaility test of greater than:  ", 6 > 4);

//  greater than or equal to test
console.log("greater than or equal to test: ", 10 >= 10);

// less tahn test
console.log("Less than test: ", 7 < 8);

// less than or equal to test\
console.log("less than or equal to test: ", 6 <= 8);

//  "and"  operator test
console.log("And Operator test: ", 5===5 && 5 > 3);
//  "or"  operator test
console.log("or Operator test: ", 5===5 || 5 > 3);


// Test whether an item is in a array
const  color :string [] = ["red", "blue", "black"];
console.log ('test "black" is in array', color.includes ("black"));

// • Test whether an item is not in a array
console.log ('test "green" is not in array', !color.includes ("green"));