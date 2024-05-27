//Determinar si un numero es par o impar
const prompt = require('prompt-sync')()
let n = prompt("Ingrese un número: ",null)
const r = function parImpar(){
    return parseInt(n)%2
}
console.log("El resto del numero es ",r())