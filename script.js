const thead = document.getElementById('thead')
const tbody = document.getElementById('tbody')
const table = {
    header :[{
        element: 'th',
        columnName:'column A',
        order:1,
        sort: undefined
    },{
        element: 'th',
        columnName:'column B',
        order:2,
        sort: undefined
    },{
        element: 'th',
        columnName:'column C',
        order:3,
        sort: undefined
    }
    ],
    body:[{
        element: 'tr',
        rowOrder: 1,
        columnElements:[{
            elementType: 'td',
            columnName:'column A',
            rowOrder:1,
            value:'row 1'
        },{
            elementType: 'td',
            columnName:'column A',
            rowOrder:1,
            value:'row 2'
        },{
            elementType: 'td',
            columnName:'column A',
            rowOrder:1,
            value:'row 3'
        } ]
    },
    {
        element: 'tr',
        rowOrder: 2,
        columnElements:[{
            elementType: 'td',
            columnName:'column B',
            rowOrder:2,
            value:'row 1'
        },{
            elementType: 'td',
            columnName:'column B',
            rowOrder:2,
            value:'row 2'
        },{
            elementType: 'td',
            columnName:'column B',
            rowOrder:2,
            value:'row 3'
        } ]
    },
    {
        element: 'tr',
        rowOrder: 3,
        columnElements:[{
            elementType: 'td',
            columnName:'column C',
            rowOrder:3,
            value:'row 1'
        },{
            elementType: 'td',
            columnName:'column C',
            rowOrder:3,
            value:'row 2'
        },{
            elementType: 'td',
            columnName:'column C',
            rowOrder:3,
            value:'row 3'
        } ]
    }]
}

const columnAddButton = document.getElementById('columnBtn')
columnAddButton.onclick = addColumnHead
const rowAddButton = document.getElementById('rowBtn')
rowAddButton.onclick = addRowData

function createTableUI(){
    
    for (const data of table.header) {
       const th = document.createElement(data.element)
       th.innerText = data.columnName
       thead.append(th)
    }
    for (const data of table.body) {
        // console.log(data.columnElements[0].elementType)
        const tr = document.createElement(data.element)
        for (const rowElement of data.columnElements) {
            const td = document.createElement(rowElement.elementType)
            td.innerText = rowElement.value 
            tr.append(td)   
        }
        tbody.append(tr)
    }
}
createTableUI()


function addColumnHead(){
    const th = document.createElement('th')
    thead.appendChild(th)
    console.log(thead.innerHTML)
    th.innerText = `Column`
    th.style.padding = '10px'
    th.style.border = '1px solid #000'
    if (tbody.childElementCount) {
        for (const el of tbody.children) {
            console.log({el})
            const td = document.createElement('td')
            el.appendChild(td)
            td.append(createInput())
            td.style.padding = '10px'
            td.style.border = '1px solid #000'
        }
    }

}

function addRowData(){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    for(i=0;i<thead.children.length ; i++){    
        const td = document.createElement('td')
        tr.appendChild(td)
        td.append(createInput())
        td.style.padding = '10px'
        td.style.border = '1px solid #000'

    }
}

function createInput(){
    const input = Object.assign(document.createElement('input'),
    {
        type: 'text',
        placeholder: 'Enter your text'
    })
    return input
}



