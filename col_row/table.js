/**
 * @callback tablecallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */
import { Manager } from "./manager.js"

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
     * @param {HeaderType[]} header 
     * @param {Manager} Manager
     */
    constructor(headerarray,Manager) {
        this.#manager = Manager;
        const table = document.createElement("table")
        document.body.appendChild(table)

        const thead = document.createElement("thead")
        table.appendChild(thead)

        const tr = document.createElement("tr")
        thead.appendChild(tr)

        for (let a of headerarray) {
            const th = document.createElement("th")
            th.innerText=a.name
            if (a.colSpan == 2) {
                th.colSpan = 2
            }
            tr.appendChild(th)
        }

        const tbody = document.createElement("tbody")
        table.appendChild(tbody)
        this.#tbody = tbody
    }

    /**
     * 
     * @param {tablecallback} tablecallback 
     */
    setAppendRow(tablecallback) {
        this.#manager.addcallback = (element) => {
            tablecallback(this.#tbody,element);
        }
    }
}
export {table}