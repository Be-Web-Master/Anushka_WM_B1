// 15. Filter an array of book objects, keeping only the books with a rating greater than 4.

const arr =[
    { title: 'The Great Gatsby', rating: 4.7 },
    { title: 'To Kill a Mockingbird', rating: 4.5 },
    { title: 'Pride and Prejudice', rating: 2.8 },
    { title: 'Animal Farm', rating: 3.6 }
]
const newarr = arr.filter((elem) => {
    return elem.rating > 4
})
console.log(newarr)