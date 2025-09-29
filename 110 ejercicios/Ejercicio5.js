const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Ingrese temperatura en Celsius: "));
let fahrenheit = (celsius * 9/5) + 32;
console.log("Equivalente en Fahrenheit:", fahrenheit);

fahrenheit = parseFloat(prompt("Ingrese temperatura en Fahrenheit: "));
celsius = (fahrenheit - 32) * 5/9;
console.log("Equivalente en Celsius:", celsius);