import { AuthorManager } from "./manager.js";
import { viewelement } from "./viewelement.js";

class importexport extends viewelement {

    /**
     * @type {AuthorManager}
     */
    #manager

    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id,manager) {
        super(id)
        this.#manager = manager;
        const importinput = document.createElement("input");
        importinput.type = "file";
        this.div.appendChild(importinput)
        importinput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const result = []
                const fileContent = reader.result;
                const fileContentLines = fileContent.split("\n");
            }
            reader.readAsText(file,"UTF-8");

        })
    }
}

export {importexport}