import { Manager } from "./manager"

class table {
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    /**
     * @type {Manager}
     */
    #manager
    /**
     * 
     * @param {HeaderArrayType} header 
     * @param {Manager} Manager
     */
    constructor(headerarray,Manager) {
        const table = document.createElement("table")
        document.body.appendChild(table)

        const thead = document.createElement("thead")
        table.appendChild(thead)

        const tr = document.createElement("tr")
        thead.appendChild(tr)

        for (let a of headerarray) {
            const th = document.createElement("th")
            th.innerText=a.name
            if (a.colSpan) {
                th.colSpan = a.colSpan
            }
            tr.appendChild(th)
        }

        const tbody = document.createElement("tbody")
        table.appendChild(tbody)


    }
}
export {table}