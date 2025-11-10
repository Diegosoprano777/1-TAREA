// seleccion.js - escoger jugador
const entrenamiento = require('./entrenamiento');

const jugadores = [
  { nombre: "Ronaldinho", velocidad: 85, regate: 97, tiro: 90 },
  { nombre: "CR7", velocidad: 90, regate: 88, tiro: 95 },
  { nombre: "Shaarawy", velocidad: 82, regate: 84, tiro: 86 },
  { nombre: "Pirlo", velocidad: 70, regate: 80, tiro: 92 }
];

function mostrarJugadores() {
  console.clear();
  console.log("=== Selecciona tu jugador ===\n");
  jugadores.forEach((j, i) => {
    console.log(`${i+1}. ${j.nombre}  | Vel:${j.velocidad}  Rag:${j.regate}  Tir:${j.tiro}`);
  });
  console.log("\n0. Salir");
}

function start(rl) {
  mostrarJugadores();
  rl.question("\nElige el número del jugador: ", (respuesta) => {
    const idx = Number(respuesta) - 1;
    if (respuesta === '0') {
      console.log("\nGracias por jugar. ¡Hasta la próxima!\n");
      return rl.close();
    }
    if (!Number.isInteger(idx) || idx < 0 || idx >= jugadores.length) {
      console.log("\nOpción inválida. Intenta otra vez.");
      return setTimeout(() => start(rl), 800);
    }
    // Clonar jugador elegido
    const elegido = Object.assign({}, jugadores[idx]);
    console.log(`\nHas escogido a ${elegido.nombre}!`);
    rl.question("\nPresiona ENTER para ir al entrenamiento...", () => {
      entrenamiento.start(rl, elegido);
    });
  });
}

module.exports.start = start;
