/**
 * @callback activatecallback
 * @returns {void}
 */
import { hide, show } from "./gomszab.min.js";
class viewelement{
    /**
     * @type {string}
     */
    #id

    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @type {activatecallback}
     */
    #activatecallback

    get div() {
        return this.#div;
    }

    get id() {
        return this.#id;
    }

    /**
     * @param {activatecallback} value
     */
    set activatecallback(value) {
        this.#activatecallback = value
    }

    constructor(id) {
        this.#id = id
        this.#div = document.createElement("div")
        this.#div.id = id
    }

    /**
     * 
     * @param {HTMLElement} parent 
     * @returns {void}
     */
    appendto(parent) {
        parent.appendChild(this.#div);
    }

    /**
     * 
     * @param {string} id
     * @returns {void} 
     */
    activate(id) {
        if(this.#id == id) {
           show(this.#div) 
           if (this.#activatecallback) {
            this.#activatecallback()
           }
        }else {
            hide(this.#div)
        }
    }
}

export {viewelement}