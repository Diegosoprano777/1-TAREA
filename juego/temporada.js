// temporada.js - simula una temporada simple
// Recibe rl y jugador. Al terminar, permite jugar de nuevo o salir.
const seleccion = require('./seleccion');

function calcularPuntaje(jugador) {
  // Simple función que combina stats y factor aleatorio
  const base = jugador.velocidad * 0.4 + jugador.regate * 0.35 + jugador.tiro * 0.25;
  const alea = (Math.random() * 20) - 10; // -10..+10
  return Math.round(base / 10 + alea);
}

function start(rl, jugador) {
  console.clear();
  console.log("=== Temporada ===\n");
  console.log(`Jugador: ${jugador.nombre}`);
  console.log(`Stats: Vel ${jugador.velocidad} | Rag ${jugador.regate} | Tir ${jugador.tiro}\n`);

  console.log("Simulando la temporada... (esto tarda unos segundos)\n");
  // Simular varios partidos
  let victorias = 0;
  let empates = 0;
  let derrotas = 0;
  const matches = 10;

  for (let i = 0; i < matches; i++) {
    const score = calcularPuntaje(jugador) + Math.floor(Math.random() * 6) - 3; // pequeño ruido
    if (score >= 12) victorias++;
    else if (score >= 9) empates++;
    else derrotas++;
  }

  console.log(`Resultados de la temporada (${matches} partidos):`);
  console.log(`Victorias: ${victorias}  Empates: ${empates}  Derrotas: ${derrotas}\n`);

  // Determinar éxito
  const exito = victorias >= Math.max(4, Math.round(matches * 0.4));
  if (exito) {
    console.log("🎉 ¡Temporada exitosa! Tu jugador brilló esta temporada.");
  } else {
    console.log("😕 Temporada complicada. Hay que entrenar más.");
  }

  console.log("\nEstadísticas finales del jugador:");
  console.log(`${jugador.nombre} | Vel:${jugador.velocidad} Rag:${jugador.regate} Tir:${jugador.tiro}\n`);

  rl.question("¿Quieres jugar otra vez? (s/n): ", (resp) => {
    const r = (resp || '').toLowerCase();
    if (r === 's' || r === 'si') {
      // Volver a selección con el mismo rl
      return seleccion.start(rl);
    } else {
      console.log("\nGracias por jugar. ¡Nos vemos!");
      return rl.close();
    }
  });
}

module.exports.start = start;
