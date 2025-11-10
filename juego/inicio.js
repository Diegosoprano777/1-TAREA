// inicio.js - punto de entrada
const readline = require('readline');
const seleccion = require('./seleccion');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start() {
  console.clear();
  console.log("=======================================");
  console.log("   🏆 MODO CARRERA - CONSOLA (Node) 🏆");
  console.log("=======================================\n");
  console.log("Bienvenido al modo carrera. Vas a escoger un jugador, entrenar y jugar la temporada.");
  rl.question("\nPresiona ENTER para continuar...", () => {
    seleccion.start(rl);
  });
}

// Export para permitir reiniciar si se desea desde otros módulos
module.exports.start = start;

// Si este archivo se ejecuta directamente, arrancar el juego
if (require.main === module) {
  start();
}
