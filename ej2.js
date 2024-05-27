//Area de un rectangulo
const prompt = require ('prompt-sync')()
let h = prompt("Ingrese la altura: ",null)
let b = prompt("Ingrese la base: ", null)
const r = function area(){
    return parseInt(h)*parseInt(b)
}
console.log("El area del rectangulo es: ", r())