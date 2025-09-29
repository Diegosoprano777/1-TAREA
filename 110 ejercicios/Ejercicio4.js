const prompt = require("prompt-sync")();

let nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let anioActual = new Date().getFullYear();
let edad = anioActual - nacimiento;
console.log("Su edad es:", edad);