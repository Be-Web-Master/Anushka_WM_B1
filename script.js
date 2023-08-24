const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
};
// fetchData('../data.json')

fetch('data.json')
.then ((response)=> response.json())
.then ((data) => console.log(data))
.catch((error) => console.log(error))