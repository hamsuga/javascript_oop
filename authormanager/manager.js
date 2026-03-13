/**
 * @callback tablecallback
 * @param {Author[]} authorlist
 * @returns {void}
 */
/**
 * @callback addElementresultCallback
 * @param {string} resultMessage
 * @returns {void}
 */
class AuthorManager {
    /**
     * @type {Author[]}
     */
    #authorList

    /**
     * @type {tablecallback}
     */
    #tablecallback

    /**
     * @type {addElementresultCallback}
     */
    #addElementresultCallback 

    /**
     * @param {tablecallback} value 
     */
    set tablecallback(value) {
        this.#tablecallback = value
    }
    /**
     * @param {addElementresultCallback} value
     */
    set addElementresultCallback(value) {
        this.#addElementresultCallback = value
    }

    constructor() {
        this.#authorList = []
    }

    /**
     * 
     * @param {import(".").AuthorType} element 
     */
    addElement(element) {
        const author = new Author()
        author.id = this.#authorList.length
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        if (author.validate()) {
            this.#authorList.push(author);
            this.#addElementresultCallback("sikeres elem felvetel")
        }else {
            this.addElementresultCallback("sikertelen elem felvetel")
        }
        
    }

    /**
     * @returns {void}
     */
    getAllElement() {
        this.#tablecallback(this.#authorList);
    }
}
class Author {
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {string}
     */
    #name;

    /**
     * @type {string}
     */
    #work;

    /**
     * @type {string}
     */
    #concept;

    constructor() {

    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    get work() {
        return this.#work
    }

    set work(value) {
        this.#work = value
    }

    get concept() {
        return this.#concept
    }
    set concept(value) {
        this.#concept = value
    }

    /**
     * @returns {boolean}
     */
    validate() {
        return this.#id >=0 && this.#name && this.#concept && this.#work;
    }
}
export {AuthorManager}