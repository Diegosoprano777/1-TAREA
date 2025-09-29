const prompt = require("prompt-sync")();

let num15 = parseInt(prompt("Ingrese un número: "));
let factorial = 1;
for (let i = 1; i <= num15; i++) {
  factorial *= i;
}
console.log("El factorial es:", factorial);