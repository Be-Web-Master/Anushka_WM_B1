const thead = document.getElementById('thead')
const tbody = document.getElementById('tbody')
const LOCAL_STORAGE_TABLE_KEY = 'tableSateData'
let tableState = {
    header :[],
    body:[]
}
tbody.addEventListener('keyup',(event)=>{
    console.log(event.target)
})
thead.addEventListener('keyup',(event)=>{
    console.log(event.target)
})
// to store local data in local storage
if(localStorage.getItem
    (LOCAL_STORAGE_TABLE_KEY)){
        //agr data hoga to override kr dega tableState m
    tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
}else{
    //jo apn data denge wo save kr dega
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

const columnAddButton = document.getElementById('columnBtn')
columnAddButton.onclick = addNewColumn
const rowAddButton = document.getElementById('rowBtn')
rowAddButton.onclick = addNewRow
const clearTableButton = document.getElementById('clearBtn')
clearTableButton.onclick = clearTableData

function createTableUI(){
    thead.innerHTML = ''
    tbody.innerHTML = ''

    for (const columnText of tableState.header) {
       const th = document.createElement(columnText.elementType)
       const columnElement = createInput(columnText.columnNumber)
       columnElement.value = columnText.columnName
       th.append(columnElement)
       thead.append(th)
    }
    for (const row of tableState.body) {
        const tr = document.createElement(row.elementType)
        for (const rowElement of row.cellDetails) {
            const td = document.createElement(rowElement.elementType)
            // console.log(rowElement)
            const elementRowInput = createTextArea(rowElement.rowNumber,rowElement.columnNumber)
            elementRowInput.value = rowElement.cellValue
            td.append(elementRowInput)
            tr.append(td)   
        }
        tbody.append(tr)
    }
    updateTableData()
}
createTableUI()

//to create column
function addNewColumn(){
    const headerObject= {
        elementType: 'th',
        columnName:'',
        columnNumber: tableState.header.length,
        sort: undefined
    }
    tableState.header.push(headerObject);
    tableState.body.forEach((rowObj, idx)=>{
        rowObj.cellDetails.push({
            elementType : 'td',
            columnNumber:'',
            rowNumber: idx+1,
            cellValue : ''
        })
    })
    createTableUI(tableState);

}
//to create row
function addNewRow(){
    const bodyObject = {
        elementType : 'tr',
        rowNumber : tableState.body.length+1,
        cellDetails:[]
    }
    tableState.header.forEach((headerElement)=>{
        // console.log(headerElement)
        bodyObject.cellDetails.push(
            {
                elementType : 'td',
                columnNumber:headerElement.columnNumber +1,
                rowNumber : tableState.body.length+1,
                cellValue : ''
            }
        )
    })
    tableState.body.push(bodyObject)
    createTableUI(tableState)
    
}
// to create new input
function createInput(columnNumber){
    const input = Object.assign(document.createElement('input'),
    {
        id : `0-${columnNumber}`,
        type: 'text',
        placeholder: 'Column name'
    })
    return input
}

function createTextArea(rowNumber,columnNumber){
    const rowTextArea = Object.assign(document.createElement('textarea'),
    {   
        id:`${rowNumber}-${columnNumber}`,
        placeholder: 'Row data'
    })
    return rowTextArea
}

function updateTableData(){
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

function clearTableData(){
    localStorage.clear()
}

