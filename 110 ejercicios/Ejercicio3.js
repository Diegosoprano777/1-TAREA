const prompt = require("prompt-sync")();

let a = parseInt(prompt("Ingrese el primer número: "));
let b = parseInt(prompt("Ingrese el segundo número: "));
let c = parseInt(prompt("Ingrese el tercer número: "));

let mayor = a;
if (b > mayor) mayor = b;
if (c > mayor) mayor = c;

console.log("El mayor es:", mayor);