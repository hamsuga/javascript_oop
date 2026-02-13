/**
 * @import { FormFieldType,HeaderArrayType,ColspanType,RowspanType } from './functions.js'
 */
import data from './data.json' with {type:'json'}
import { FormController } from './form.js';
import { Manager } from './manager.js'
import { table } from './table.js';

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} elem 
 */
const renderColspanBody = (tbody, elem) => {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td = document.createElement("td")
    td.innerText=elem.neve
    tr.appendChild(td)

    const td1 = document.createElement("td")
    td1.innerText=elem.kor
    tr.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText=elem.szerelme1
    tr.appendChild(td2)

    if(elem.szerelme2) {
        const td3 = document.createElement("td")
        td3.innerText = elem.szerelme2
        tr.appendChild(td3)
    }
    else {
        td2.colSpan = 2
    }
}

const manager = new Manager();
manager.addcallback = (element) => {console.log(element)};

const Table = new table(data.colspanHeaderArray,manager);
Table.setAppendRow(renderColspanBody)
for (const a of data.colspanDataArr) {
    manager.AddElement(a)
}
//megcsinalhato rowspanre is 
const br = document.createElement("br")
document.body.appendChild(br)

const form = new FormController(data.colspanFormFieldList, manager)