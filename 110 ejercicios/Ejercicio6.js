const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));
let imc = peso / (altura * altura);
console.log("Su IMC es:", imc);