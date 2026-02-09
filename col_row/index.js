/**
 * @import { FormFieldType,HeaderArrayType,ColspanType,RowspanType } from './functions.js'
 */
import data from './data.json' with {type:'json'}
import { Manager } from './manager.js'
import { table } from './table.js';

const manager = new Manager();
manager.addcallback = (element) => {console.log(element)};

const Table = new table(data.colspanHeaderArray,manager);
for (const a of data.colspanDataArr) {
    manager.AddElement(a)
}
