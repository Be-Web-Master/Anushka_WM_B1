const LOCAL_STORAGE_TABLE_KEY = 'tableStateData'
let tableState = {
    header: [],
    body: []
}

const thead = document.getElementById('thead')
const tbody = document.getElementById('tbody')
const sortingDropdown = document.getElementById('columnDropdown')

// to sorting table row 
const sortForm = document.getElementById('sort-form')
sortForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const selectedColumnName = event.target.columnsDropdown.value;
    const sortingOrder = event.target.sortOrder.value;
    const columnNumber = tableState.header.find(headerobj =>
        headerobj.columnName === selectedColumnName
    ).columnNumber
    tableState.body.sort((obj1, obj2) => {
        if (Number(obj1.cellDetails[columnNumber].cellValue )> Number(obj2.cellDetails[columnNumber].cellValue)) {
            if (sortingOrder === 'Ascending') return 1
            else return -1
        }

        else {
            if (sortingOrder === 'Descending') return 1
            else return -1
        }
    })
    updateTableData(tableState)

    console.log({ selectedColumnName, sortingOrder, columnNumber })
})

// to store local data in local storage
if (localStorage.getItem
    (LOCAL_STORAGE_TABLE_KEY)) {
    //agr data hoga to override kr dega tableState m
    tableState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TABLE_KEY));
} else {
    //jo apn data denge wo save kr dega
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}
const createSortingFormElements = () => {
    tableState.header.forEach((columnheader) => {
        const optionElement = document.createElement('option');
        optionElement.setAttribute('value', columnheader.columnName)
        optionElement.innerText = columnheader.columnName
        sortingDropdown.append(optionElement)
    })
}
tableState.header.length && tableState.body.length && createSortingFormElements()

const columnAddButton = document.getElementById('columnBtn')
columnAddButton.onclick = addNewColumn
const rowAddButton = document.getElementById('rowBtn')
rowAddButton.onclick = addNewRow
const clearTableButton = document.getElementById('clearBtn')
clearTableButton.onclick = clearTableData

tbody.addEventListener('keyup', (event) => {
    const [rowNumber, columnNumber] = event.target.id.split("-")
    tableState.body[rowNumber].cellDetails[columnNumber].cellValue = event.target.value
    updateTableData()
})
thead.addEventListener('keyup', (event) => {
    const [rowNumber, columnNumber] = event.target.id.split("-")
    tableState.header[columnNumber].columnName = event.target.value;
    updateTableData()
})

function createTableUI() {
    thead.innerHTML = ''
    tbody.innerHTML = ''

    for (const columnText of tableState.header) {
        const th = document.createElement(columnText.elementType)
        const columnElement = createInput(columnText.columnNumber)
        columnElement.value = columnText.columnName
        const searchElement = document.createElement('input')
        searchElement.type = 'search'
        searchElement.placeholder = 'search  ' + columnText.columnName
        th.append(columnElement)
        th.append(searchElement)
        thead.append(th)
    }
    for (const row of tableState.body) {
        const tr = document.createElement(row.elementType)
        for (const rowElement of row.cellDetails) {
            const td = document.createElement(rowElement.elementType)
            const elementRowInput = createTextArea(rowElement.rowNumber, rowElement.columnNumber)
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
function addNewColumn() {
    const headerObject = {
        elementType: 'th',
        columnName: '',
        columnNumber: tableState.header.length,
        sort: undefined
    }
    tableState.header.push(headerObject);
    tableState.body.forEach((rowObj, idx) => {
        rowObj.cellDetails.push({
            elementType: 'td',
            columnNumber: headerObject.columnNumber,
            rowNumber: idx,
            cellValue: ''
        })
    })
    createTableUI(tableState);

}
//to create row
function addNewRow() {
    const bodyObject = {
        elementType: 'tr',
        rowNumber: tableState.body.length,
        cellDetails: []
    }
    tableState.header.forEach((headerElement) => {
        bodyObject.cellDetails.push(
            {
                elementType: 'td',
                columnNumber: headerElement.columnNumber,
                rowNumber: tableState.body.length,
                cellValue: ''
            }
        )
    })
    tableState.body.push(bodyObject)
    createTableUI(tableState)

}
// to create new input
function createInput(columnNumber) {
    const input = Object.assign(document.createElement('input'),
        {
            id: `0-${columnNumber}`,
            type: 'text',
            placeholder: 'Column name'
        })
    return input
}

function createTextArea(rowNumber, columnNumber) {
    const rowTextArea = Object.assign(document.createElement('textarea'),
        {
            id: `${rowNumber}-${columnNumber}`,
            placeholder: 'Row data'
        })
    return rowTextArea
}

function updateTableData() {
    localStorage.setItem(LOCAL_STORAGE_TABLE_KEY, JSON.stringify(tableState));
}

function clearTableData() {
    localStorage.clear()
}

