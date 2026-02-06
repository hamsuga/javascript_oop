import { muvelet,muveletLetrehoz } from "./function.js"


const input = document.createElement("input")
const input2 = document.createElement("input")
document.body.appendChild(input)
document.body.appendChild(input2)
const div = document.createElement("div")
document.body.appendChild(div)
const button = document.createElement("button")
document.body.appendChild(button)
button.innerText = "button"
button.addEventListener("click",function(){
    const in1value = Number(input.value)
    const in2value = Number(input2.value)
    const {result} = muvelet(in1value,in2value,muveletLetrehoz("+"))
     div.innerText = result
})
const fv = muveletLetrehoz("+")
console.log(fv(1,2))