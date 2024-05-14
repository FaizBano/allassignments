// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

// let Tname: string [] =['house','car','institution'];

interface house {

    location :string,
    worth :number,
    status :string,
    size : string,
    leazed: boolean
}
// house object
let house :house = {
    location : "Karachi",
    worth : 12999999,
    status : "double Story",
    size : "1000 yards",
    leazed : true
}
// print house object
console.log(house);

 interface car {
    color : string,
    maker : string,
    automatic: boolean,
    price : number,
     }

    // car object
     let car:car = {        
        color : "black",
        maker : "Honda",
        automatic: true,
        price : 120000000
     }
    //  print car object


    console.log(car);

    interface institution {
    status : string,
    students: number,
    faculity : string,
    location : string,
    }
    // institution object

    let institution :institution = {

        status : "Primary School",
        students: 2000,
        faculity : "science",
        location :"Karachi",
        }
        // print institution
        console.log(institution);

        // data type of person object

        interface person{
            age : number,
            nationality : string,
            gender: string,
            student: boolean
        }

            // information of a person

            let person : person = {
                
                age : 24,
                nationality : "pakistani",
                gender : "male",
                student : true
               
            }

            // print person object
            console.log(person);



        



