const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
if (num2 !== 0) {
  console.log("División:", num1 / num2);
} else {
  console.log("No se puede dividir entre 0");
}