// const studentObj = {
//     name:"Anuhska",
//     rollNumber:1,
//     class:9,
//     section:'A',
//     gender:'Female',
//     country:'India'
// }
//1.  List all the keys of the given object
// console.log(Object.keys(studentObj))
//2.   List all the Values of the given object
// console.log(Object.values(studentObj))
//3.   List all the Keys and Values of the given object in the form of array
// console.log(Object.entries(studentObj))
//4.   Merge all of these object and create a single object using object method.

// const obj1 ={name:'Anushka', gender:'Female'}
// const obj2 ={section:'B', gender:'Male'}
// const obj3 ={country:'India'}
// console.log(Object.assign(obj1,obj2,obj3))

/*5.   Create an object which have properties name and one method
printStudentDetails, create another object and using .create method,
add some more properties and print student details.*/

// const studentDetails = {
//     name:"Anushka",
//     printStudentDetails: function() {
//         console.log(`My name is ${this.name} and age ${this.age}`)
//     }
// }
// const me = Object.create(studentDetails);
// me.age ='21'
// console.log(me.printStudentDetails())

//6.    Create an object with 2 properties and add 1 properties using .defineProperty() with writable true

// const studentDetails ={
//     name: "Anushka",
//     Age : '21'
// }
// Object.defineProperty(studentDetails,'rollno',{
//     value:'40',
//     writable: true,
// });
// console.log(studentDetails);

//7.    Create an object with 2 properties and add 2 properties using .defineProperties() with writable true

// const studentDetails ={
//     name: "Anushka",
//     Age : '21'
// }
// Object.defineProperties(studentDetails,{
//     rollNo:{
//         value:"40",
//         writable: true
//     },
//     city:{
//         value:"Bhopal",
//         writable: true
//     }
// });
// console.log(studentDetails);

/* 8.  Create an object and apply .preventExtensions and try to add properties using defineProperties and then remove any existing properties. */

// const obj ={
//     name:"Anushka",
//     Age : "21"
// }
// Object.preventExtensions(obj);
// Object.defineProperties(obj,{
//     city:{
//         value:"Bhopal",
//         writable:true
//     }
// })
// delete obj.name;
// console.log(obj)


/* 9.  Create an object and apply .seal and try to add properties using defineProperties and then remove any existing properties. */

// const obj = {
//     name: "Anushka",
//     Age: "21"
// }
// Object.seal(obj);
// Object.defineProperties(obj, {
//     city: {
//         value: "Bhopal",
//         writable: true
//     }
// })
// delete obj.name
// console.log(obj)


/* 10.  Create an object and apply .freeze and try to add properties using defineProperties and then remove any existing properties. */

// const obj = {
//     name: "Anushka",
//     Age: "21"
// }
// Object.freeze(obj);
// Object.defineProperties(obj, {
//     city: {
//         value: "Bhopal",
//         writable: true
//     }
// })
// delete obj.name
// console.log(obj)

//Q11: Create an object and check for isSealed after applying .seal and without applying .seal

// const obj = {
//     name: "Anushka",
//     Age:"21"
// }
// console.log(Object.isSealed(obj))
// Object.seal(obj)
// console.log(Object.isSealed(obj))

//Q12: Create an object and check for isExtensible after applying .preventExtensions and without applying .preventExtensions

// const obj ={
//     name:"Anushka",
//     Age:"21"
// }
// console.log(Object.isExtensible(obj))
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj))

//Q13: Create an object and check for isFrozen after applying .freeze and without applying .freeze

// const obj ={
//     name:"Anushka",
//     Age:"21"
// }
// console.log(Object.isFrozen(obj))
// Object.freeze(obj);
// console.log(Object.isFrozen(obj))

//Create an object and gets it’s prototype

// const obj ={
//     name: "Anushka",
//     Age: "21"
// }
// console.log(Object.getPrototypeOf(obj))

//Q15: Create two objects obj1, obj2 and set obj1’s prototype on the obj2 object and try 
// to get obj1 properties through obj2, which should not exist in obj2 before.

// const obj1={
//     name:"Anushka",
//     Age:"21"
// }

// const obj2={
//     RollNo:"40"
// }

// Object.setPrototypeOf(obj1 , obj2)
// console.log(obj1.RollNo)

// Q16: Create an object and apply .entries then create a new object using .fromEntries() and assign it in myObj2.

// const obj = {
//     name: "Anushka",
//     Age: "21"
// }

// console.log(Object.entries(obj))

// const obj = new Map([
//     ['name', 'Anushka'],
//     ['age', 21],
//   ]);
// const obj2 = Object.fromEntries(obj);
// console.log(obj2)

// Q17: Create an object and try to check two properties using .hasOwnProperty, second property should not exist.

const obj ={
    name: "Anushka",
    Age : "21"
}
console.log(Object.hasOwn(obj, 'name'));

console.log(Object.hasOwn(obj, 'date'));