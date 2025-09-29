/*
22 - Día de la semana
Recibe número 1-7 y devuelve nombre del día.
*/
function diaSemana(n) {
  switch(n) {
    case 1: return 'Lunes';
    case 2: return 'Martes';
    case 3: return 'Miércoles';
    case 4: return 'Jueves';
    case 5: return 'Viernes';
    case 6: return 'Sábado';
    case 7: return 'Domingo';
    default: return 'Número inválido (debe ser 1-7)';
  }
}

console.log('22 - Día de la semana');
console.log('3 ->', diaSemana(3));
console.log('8 ->', diaSemana(8));
console.log('');
module.exports = diaSemana;
