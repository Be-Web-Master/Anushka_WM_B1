// 28. Given a list of 8 individuals with their names and ages, please perform the following tasks:
// Sort the names in ascending order based on their ages.
// Determine the individuals who are eligible to vote (age should be above 40).


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
console.log(ageResult)

// Sort the names in ascending order based on their ages.
let nameResult
for(let i =0; i<persons.length; i++){
    nameResult = persons.sort((a,b) => {
        a.age - b.age
    })
}
console.log(nameResult)
