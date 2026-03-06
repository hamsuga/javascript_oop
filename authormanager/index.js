import { Table } from "./table.js";
import { Navbar } from "./navigationbar.js";
import { FormController } from "./form.js";
import { AuthorManager } from "./manager.js";

/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */
const formFields = [{
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom']

const manager = new AuthorManager()
manager.addElement({
    author: "aaa",
    concept: "bbb",
    work: "ccc"
})
const navbar = new Navbar();
navbar.appendto(document.body)
const table = new Table("table",headerArray,manager)
table.appendto(document.body)
navbar.addViewElement("Tablazat", table);
const form = new FormController("tableform")
form.appendto(document.body)
navbar.addViewElement("form", form)
navbar.activate("table");
manager.getAllElement();