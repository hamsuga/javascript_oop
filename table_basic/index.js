/**
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
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
 
class Table{
    #tbody //privát változó létrehozása
    /**
     * @param {HeaderType []} headerArr fejléc tömb
     */
    constructor(headerArr){ //konstruktor fejléc adattal
        this.#tbody = makeTableBodyWithHeader(headerArr) //tbody értékét megadjuk függvény segítségével, egyszerre közbe a fejlécet legeneráljuk
    }
    /**
     * @returns {HTMLTableSectionElement} táblázat törzs
     */
    get tbody(){ //getter függvény, amivel megkapjuk a tbody-t
        return this.#tbody //visszatér a táblázat törzsével
    }
    /**
     * @callback renderRowCallback
     * @param {HTMLSection}
     */
    appendRow(callback)
    {
        callback(this.#tbody)
    }
 
}
class ColSpanTable extends Table{
    /**
     *
     * @param {HeaderType []} headerArr fejléc tömb
     */
    constructor(headerArr){ //konstruktor fejléc tömb paraméterrel
        super(headerArr) //a szülő konstruktorát idézzük
    }
    /**
     *
     * @param {ColspanRowType []} colSpanArr colspanos táblázat törzs tömbje
     */
    Render(colSpanArr) { //mehod ami rendereli a táblázat törzsét
        renderColspanBody(this.tbody,colSpanArr) //függvény meghívásával rendereljük a táblázat törzsöt
    }
}
 
class RowSpanTable extends Table{
    /**
     * @param {HeaderType []} headerArr fejléc tömb
     */
    constructor(headerArr){ //konstrukor fejléc paraméterrel
        super(headerArr) //a szülő konstruktorát idézzük
    }
    /**
     * @param {RowspanRowType []} rowSpanArr táblázat törsz tömbje
     */
    Render(rowSpanArr){ //method ami rendereli a táblázat törzsét
        renderRowspanBody(this.tbody,rowSpanArr) //függvény meghívásával rendereljük a táblázat törzsét
    }
 
}
 
const colSpan = new ColSpanTable(colspanHeaderArr) //példányosítunk colSpanTablet
colSpan.Render(colspanBodyArr) //render method meghívása a colspan
/**
 * @type {RowspanRowType}
 */
const obj1= {
    author:"Appolliniare",
    title1:"A megsebzett galamb és a szökőkút",
    concepts1:"képvers",
    concepts2:"avantgárd"
}
 
 
const rowSpan = new RowSpanTable(rowspanHeaderArr)
rowSpan.Render(rowspanBodyArr)
const button = document.getElementById("gomb")
/**
 * @type {RowspanRowType}
 */
    const obj= {
    author:"Appolliniare",
    title1:"A megsebzett galamb és a szökőkút",
    concepts1:"képvers",
    title2:"Búcsú",
    concepts2:"avantgárd"
}
 
button.addEventListener("click",onClickButton.bind(rowSpan))
/**
 * @this a táblázat példány
 */
function onClickButton(){
    this.appendRow(function(tbody){
    const tableRow = document.createElement("tr")
    tbody.appendChild(tableRow)
    const td1 = document.createElement("td")
    tableRow.appendChild(td1)
    td1.innerText = obj.author
    const td2 = document.createElement("td")
    tableRow.appendChild(td2)
    td2.innerText = obj.title1
    const td3 = document.createElement("td")
    tableRow.appendChild(td3)
    td3.innerText = obj.concepts1
    if(obj.title2 && obj.concepts2)
    {
        const tablerow2 = document.createElement("tr")
        tbody.appendChild(tablerow2)
        const td4 = document.createElement("td")
        tablerow2.appendChild(td4)
        td4.innerText = obj.title2
        const td5 = document.createElement("td")
        tablerow2.appendChild(td5)
        td5.innerText = obj.concepts2
        td1.rowSpan= 2
    }
 
})
}
 
const button1 = document.getElementById("gomb1")
 
button1.addEventListener("click",onClickButtonCol.bind(colSpan))
/**
 * @this a táblázat példány
 */
function onClickButtonCol(){
    this.appendRow(function(tbody){
    const tableRow = document.createElement("tr")
    tbody.appendChild(tableRow)
    const td1 = document.createElement("td")
    tableRow.appendChild(td1)
    td1.innerText = obj1.author
    const td2 = document.createElement("td")
    tableRow.appendChild(td2)
    td2.innerText = obj1.title1
    const td3 = document.createElement("td")
    tableRow.appendChild(td3)
    td3.innerText = obj1.concepts1
    const td4 = document.createElement("td")
    tableRow.appendChild(td4)
    td4.innerText = obj1.concepts2
   
})
}