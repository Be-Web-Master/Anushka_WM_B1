const idInput = document.getElementById('idInput')
const todoList = document.getElementById('todoList')
const submitBtn = document.getElementById('submitBtn')
const searchInput = document.getElementById('searchInput')
const todoLiData = []
const GET_URL = (idInputVal) => `https://jsonplaceholder.typicode.com/todos/${idInputVal}`

const addElement = (liText) => {
    const liTagElement = document.createElement('li')
    liTagElement.innerText = liText;
    todoList.append(liTagElement)
}

const changeBtnText = (value) => {
    submitBtn.innerText = value
}

const fetchData = async (url) => {
    const todoDataResponse = await fetch(url);
    const data = await todoDataResponse.json()
    return data;
}
const handleAddTaskSubmit = async (event) => {
    event.preventDefault();
    let idInputVal = idInput.value

    if (idInputVal === '' || idInputVal < 0 || idInputVal > 200) {
        alert('Enter a vaild id!')
        idInput.value = ''
        return;
    }
    changeBtnText('Adding')
    const todoData = await fetchData(GET_URL(idInputVal))
    if (!todoData.title) {
        alert('failed to get data!')
        changeBtnText('Add')
        idInput.value = ''
        return;
    }
    addElement(todoData.title)
    todoLiData.push(todoData.title)
    updateTodoList()
    idInput.value = ''
    changeBtnText('Add')
}
const clearTodoList = () =>{
    todoList.innerHTML = ''
}
const updateTodoList = () =>{
    clearTodoList();
    for (const data of todoLiData) {
        // console.log({name: data});
        addElement(data)
    }
}
const handleSearchInput = (event) =>{
    const dataValue = event.target.value
    searchArrayList(dataValue)
   
}

const  searchArrayList= (dataValue) =>{
    let searchArray = todoLiData.filter((elem) =>{
        return elem.includes(dataValue)
    })
    clearTodoList()
    if(searchArray.length > 0){        
        searchArray.map((li)=>{
            addElement(li)
        })
    }
}                             