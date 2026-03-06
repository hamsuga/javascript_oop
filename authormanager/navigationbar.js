import { createRadioButton } from "./gomszab.min.js";
import { viewelement } from "./viewelement.js";

class Navbar extends viewelement{
    /**
     * @type {viewelement[]}
     */
    #viewelementlist

    constructor() {
        super("navbar");
        this.div.addEventListener("change", (e) => {
            const selectedRadioButton = e.target.value;
            this.activate(selectedRadioButton);
        })
        this.#viewelementlist = [];
    }

    /**
     * 
     * @param {string} label 
     * @param {viewelement} viewelement 
     */
    addViewElement(label, viewelement) {
        this.#viewelementlist.push(viewelement)
        const div = createRadioButton({id: viewelement.id,name: this.id, label });
        this.div.appendChild(div)
    }

    /**
     * @override
     * @param {string} value 
     */
    activate(value) {
        this.div.querySelector(`#${value}`).checked = true;
        for(const viewelement of this.#viewelementlist) {
            viewelement.activate(value);
        }
    }
}
export {Navbar}