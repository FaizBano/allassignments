//  assignmentno2
//  storing a person name in a veriable
let personName:string=("Faiz Bano");
// printing a personName in lowercase
console.log("lowercase:", personName.toLowerCase());
// printing a personName in Uppercase
console.log("Uppercase:", personName.toUpperCase());
// printing a personName in titlecase
console.log("titlecase:", personName.replace(/\bw/g,C => C.toUpperCase( )));