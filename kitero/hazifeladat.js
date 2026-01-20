
/**
 * 
 * @param {string} mi 
 * @param {int} hegy
 */
// ha jol emlekszem akkor oran mondta hogy ezek jo hogyha vannak
/**function evoeszkoz(mi) {
    this.mi = mi;
    this.hegy = 0;
}

evoeszkoz.prototype.hegyek = function() {
    this.hegy++
}

**/
class evoeszkoz {
    constructor(mi) {
        this.mi = mi
        this.hegy = 0;
    }
    hegyek() {
        this.hegy++
    }
}

const villa = new evoeszkoz("villa")
const kes = new evoeszkoz("kes")

for (let i=0; i<4;i++) {
    villa.hegyek()
}
console.log(villa)

kes.hegyek()
console.log(kes)