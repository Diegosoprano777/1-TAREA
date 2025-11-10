// entrenamiento.js - minijuego de entrenamiento (adivinar número)
// Recibe rl y jugador. Al terminar, llama a temporada.start
const temporada = require('./temporada');

function mostrarEstado(jugador) {
  console.log("\nEstado actual del jugador:");
  console.log(`${jugador.nombre} | Vel:${jugador.velocidad} Rag:${jugador.regate} Tir:${jugador.tiro}\n`);
}

function start(rl, jugador) {
  console.clear();
  console.log("=== Entrenamiento ===");
  mostrarEstado(jugador);
  console.log("Minijuego: Adivina el número secreto entre 1 y 5. Tienes 3 intentos.");
  const secreto = Math.floor(Math.random() * 5) + 1;
  let intentos = 3;

  function intento() {
    rl.question(`Intento (${4 - intentos}/3) - Escribe un número [1-5]: `, (resp) => {
      const n = Number(resp);
      if (!Number.isInteger(n) || n < 1 || n > 5) {
        console.log("Entrada inválida. Escribe un número entre 1 y 5.");
        return intento();
      }
      if (n === secreto) {
        console.log("\n¡Correcto! Ganaste 3 puntos de velocidad, 2 de regate y 1 de tiro.");
        jugador.velocidad += 3;
        jugador.regate += 2;
        jugador.tiro += 1;
        return rl.question("\nPresiona ENTER para continuar a la temporada...", () => {
          temporada.start(rl, jugador);
        });
      } else {
        intentos--;
        if (intentos <= 0) {
          // Entrenamiento fallido: sumar pocos puntos
          console.log(`\nNo acertaste. El número secreto era ${secreto}.`);
          const puntosVel = Math.floor(Math.random() * 2); // 0-1
          const puntosReg = Math.floor(Math.random() * 2);
          const puntosTir = Math.floor(Math.random() * 2);
          jugador.velocidad += puntosVel;
          jugador.regate += puntosReg;
          jugador.tiro += puntosTir;
          console.log(`Has ganado entrenamiento leve: +${puntosVel} vel, +${puntosReg} rag, +${puntosTir} tir.`);
          return rl.question("\nPresiona ENTER para continuar a la temporada...", () => {
            temporada.start(rl, jugador);
          });
        } else {
          console.log(`Incorrecto. Te quedan ${intentos} intentos.`);
          return intento();
        }
      }
    });
  }

  intento();
}

module.exports.start = start;
