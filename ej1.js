//Calculadora simple
const prompt = require('prompt-sync')()
let n1 = prompt("Ingrese el primer número: ",null)
let n2 = prompt("Ingrese el segundo número: ",null)
const r = function suma(){
   return parseInt(n1) + parseInt(n2)
}
console.log ("Resultado: ", r())

