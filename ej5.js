//Conversion de celsius a fahrenheit
const prompt = require('prompt-sync')()
let c = prompt("Ingrese los grados celsius: ",null)
const f = function conversion(){
    return (parseInt(c)*1.8)+32
}
console.log("Reultado: ",f())