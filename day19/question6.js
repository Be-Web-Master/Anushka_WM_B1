//6. Iterate through an array of strings using a for...if loop and capitalize the first letter of each string.

const str = ['anushka', 'arzoo', 'aastha', 'sakshee']

for (const key of str) {
    const first = key.charAt(0).toUpperCase();
    const other = key.slice(1).toLowerCase()
    console.log(first+other)
}