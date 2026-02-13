/**
 * @import { FormFieldType,HeaderArrayType,ColspanType,RowspanType } from './functions.js'
 * @callback addcallback
 * @param {ColspanType[] | RowspanType[]} element
 * @returns {void}
 */
class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataarray

    /**
     * @type {addcallback}
     */
    #addcallback

    constructor() {
        this.#dataarray = []
    }
    /**
     * 
     * @param {ColspanType | RowspanType} params 
     */
    AddElement(params) {
        this.#dataarray.push(params)
        if(this.#addcallback) {
            this.#addcallback(params)
        }
    }
    /**
     * @param {addcallback} element
     */
    set addcallback(element) {
        this.#addcallback = element
    }
    

}
export {Manager}