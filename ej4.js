//Promedio de 3 numeros 
const prompt = require ('prompt-sync')()
let n1 = prompt("Ingrese un número: ",null)
let n2 = prompt("Ingrese un número: ",null)
let n3 = prompt("Ingrese un número: ",null)
const p = function promedio(){
    return (parseInt(n1)+parseInt(n2)+parseInt(n3))/3
}
console.log("El promedio de los tres números es: ",p())