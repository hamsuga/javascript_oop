import { viewelement } from "./viewelement.js";

class FormController extends viewelement {
    constructor(id) {
        super(id);
        this.div.innerText="Form"
    }
}
export {FormController}