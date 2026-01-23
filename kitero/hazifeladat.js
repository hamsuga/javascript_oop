
/**
 * 
 * @param {string} mi 
 * @param {int} hegy
 */
// ha jol emlekszem akkor oran mondta hogy ezek jo hogyha vannak
/**function Evoeszkoz(mi) {
    this.mi = mi;
    this.hegy = 0;
}

evoeszkoz.prototype.hegyek = function() {
    this.hegy++
}

**/
class Evoeszkoz {
    constructor(mi) {
        this.mi = mi
        this.hegy = 0;
    }
    hegyek() {
        this.hegy++
    }
}

const villa = new Evoeszkoz("villa")
const kes = new Evoeszkoz("kes")

for (let i=0; i<4;i++) {
    villa.hegyek()
}
console.log(villa)

kes.hegyek()
console.log(kes)

const button = document.getElementById("button")
button.addEventListener("click",obj)
const obj = {

}