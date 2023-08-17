//5. Given an object person with properties name, age, and city, use a for...in loop to display all key-value pairs.
const person ={
    name :"Anushka",
    age : "21",
    city: "Bhopal"
}

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}