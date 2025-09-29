/*
30 - Piedra, Papel o Tijera
Función play(userMove, cpuMove). Moves: 'piedra','papel','tijera'
*/
function play(user, cpu) {
  if (user === cpu) return 'Empate';
  switch(user) {
    case 'piedra': return cpu === 'tijera' ? 'Gana' : 'Pierde';
    case 'papel': return cpu === 'piedra' ? 'Gana' : 'Pierde';
    case 'tijera': return cpu === 'papel' ? 'Gana' : 'Pierde';
    default: return 'Movimiento inválido';
  }
}

function randomMove() {
  const arr = ['piedra','papel','tijera'];
  return arr[Math.floor(Math.random()*3)];
}

console.log('30 - Piedra Papel Tijera');
console.log('Usuario piedra vs cpu tijera ->', play('piedra','tijera'));
console.log('Simulación vs random ->', play('piedra', randomMove()));
console.log('');
module.exports = { play, randomMove };
