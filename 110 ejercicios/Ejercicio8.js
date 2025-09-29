const prompt = require("prompt-sync")();

let cuenta = parseFloat(prompt("Ingrese el total de la cuenta: "));
console.log("Propina 10%:", cuenta * 0.10);
console.log("Propina 15%:", cuenta * 0.15);
console.log("Propina 20%:", cuenta * 0.20);