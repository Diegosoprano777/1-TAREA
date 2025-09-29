const prompt = require("prompt-sync")();

let pass = prompt("Ingrese la contraseña: ");
if (pass.length >= 8) {
  console.log("Contraseña válida.");
} else {
  console.log("La contraseña debe tener al menos 8 caracteres.");
}