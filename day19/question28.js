// 28. Given a list of 8 individuals with their names and ages, please perform the following tasks:
// Sort the names in ascending order based on their ages.


let persons = [
    { name: 'John', age: 45 },
    { name: 'Mary', age: 72 },
    { name: 'Robert', age: 28 },
    { name: 'Elizabeth', age: 59 },
    { name: 'William', age: 67 },
    { name: 'Patricia', age: 51 },
    { name: 'Michael', age: 75 },
    { name: 'Jennifer', age: 32 }
];
// Identify all the persons who are aged more than 60 using filter.
let ageResult 
for (const obj of persons) {
    ageResult = persons.filter((obj)=>{
        if(obj.age>60) return obj.age
    })
}
// console.log(ageResult)

// Sort the names in ascending order based on their ages.
let min = persons[0]
// console.log(min)
let sortedArr =[];
for(let i =1; i<persons.length; i++){
    if(persons[i].age < min.age){
       min = persons[i].age;
    //    console.log(min)
       sortedArr.push(persons[i]);
    }
    
}
console.log(sortedArr)
// console.log(nameResult)

// Determine the individuals who are eligible to vote (age should be above 40).

let eligible
for (const obj of persons) {
    eligible = persons.filter((obj)=>{
        if(obj.age>=40) return obj.age
    })
}
// console.log(eligible)