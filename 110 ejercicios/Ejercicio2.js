const prompt = require("prompt-sync")();

let num = parseInt(prompt("Ingrese un número: "));
if (num % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}