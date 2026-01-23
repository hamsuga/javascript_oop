/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * @callback renderRowCallback
 * @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

class table {
    #tbody;
    constructor(HeaderArr) {
        this.#tbody = makeTableBodyWithHeader(HeaderArr)
    }

    get tbody() {
        return this.#tbody;
    }
    appendrow(callback) {
        callback(this.#tbody)
    }
}

class Colspantable extends table {
    constructor(colspanHeaderArr) {
        super(colspanHeaderArr)
    }
    render(colspanBodyArr) {
        renderColspanBody(this.tbody,colspanBodyArr)
    }
}

class Rowspantable extends table {
    constructor(rowspanBodyArr) {
        super(rowspanBodyArr)
    }
    render(rowspanBodyArr) {
        renderRowspanBody(this.tbody,rowspanBodyArr)
    }
}

const colspan = new Colspantable(colspanHeaderArr)
colspan.render(colspanBodyArr)

const rowspan = new Rowspantable(rowspanHeaderArr)
rowspan.render(rowspanBodyArr)

const button = document.getElementById("gomb")
/**button.addEventListener("click",function(){
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
}
rowspan.appendrow(function(tablebody) {
    const tr = document.createElement("tr")
    const td = document.createElement("td")
    td.innerText=obj
    tablebody.appendchild(tr)
    tr.appendChild(td)
})
})
**/
button.addEventListener("click",onclickbutton.bind(rowspan))
/**
 * @this {table} a tablazat peldany
 */
function onclickbutton() {  
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
}

this.appendrow(function(tablebody) {
    const tr = document.createElement("tr")
    const td = document.createElement("td")
    td.innerText=obj
    tablebody.appendchild(tr)
    tr.appendChild(td)
})
}