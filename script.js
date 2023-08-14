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
