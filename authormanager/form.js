import { createInputAndErrorDiv } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { viewelement } from "./viewelement.js";

class FormController extends viewelement {

    /**
     * @type {AuthorManager}
     */
    #manager

    /**
     * @type {FormInput[]}
     */
    #forminputlist

    /**
     * 
     * @param {string} id 
     * @param {import {"./index.js"}.formfieldtype[];} formfieldlist 
     * @param {AuthorManager} manager 
     */
    constructor(id, formfieldlist, manager) {
        super(id);
        this.#manager = manager
        this.#forminputlist = []
        const form = document.createElement("form")
        for (const filed of formfieldlist) {
            const formInput = new FormInput(filed.id,filed.label,filed.name,form);
            this.#forminputlist.push(formInput)
        }
        const button = document.createElement("button")
        button.innerText = "kuldes"
        form.appendChild(button)
        const resultDiv = document.createElement("div")
        this.div.appendChild(resultDiv)
        this.div.appendChild(form)

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            const element = this.#createElement();
            this.#manager.addElement(element);
            
        })

        this.#manager.addElementresultCallback = (result) => {
            resultDiv.innerText = result;
            setTimeout(() => { //elso param egy callback masodik egy idovalum
                resultDiv.innerText = "";
            }, 1500)
        }
        
    }
    /**
     * @returns {import {"./index.js"  }.AuthorType;}
     */
    #createElement() {
        /**
         * @type {import {"./index.js"  }.AuthorType;}
         */
        let result = {}
        for ( const formfieldInput of this.#forminputlist) {
            if(formfieldInput.validate()) {
                result[formfieldInput.name] = formfieldInput.value
            }
        }
        return result
    }
}

class FormInput {
    /**
     * @type {HTMLInputElement}
     */
    #inputElement

    /**
     * @type {HTMLDivElement}
     */
    #errorDiv

    /**
     * @type {string}
     */
    #name

    get value() {
        return this.#inputElement.value ? this.#inputElement.value : undefined
    }

    get name() {
        return this.#name
    }

    /**
     * @param {string} id
     * @param {string} label
     * @param {string} name
     * @param {HTMLFormElement} parent
     */
    constructor(id,label,name,parent) {
        const {input, errorDiv} = createInputAndErrorDiv({id,label,name,parent})
        this.#name = name;
        this.#inputElement = input
        this.#errorDiv = errorDiv
    }

    validate() {
        let result = true
        if (!this.value) {
            this.#errorDiv.innerText = "ez a mezo kitoltese kotelezo";
            result = false

        }else {
            this.#errorDiv.innerText = ""
        }
        return result;
    }
}

export {FormController}