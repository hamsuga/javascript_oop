/**
 * @import { FormFieldType,HeaderArrayType,ColspanType,RowspanType } from './functions.js'
 */
import data from './data.json' with {type:'json'}
import { Manager } from './manager.js'
import { table } from './table.js';

const Manager = new Manager();
Manager.addcallback = (element) => {console.log(element)};

const table = new table();
