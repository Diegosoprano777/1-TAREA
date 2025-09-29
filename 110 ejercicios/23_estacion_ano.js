/*
23 - Estación del año
Entrada: mes (1-12). Devuelve estación (hemisferio norte asumido).
*/
function estacionMes(mes) {
  switch(mes) {
    case 12: case 1: case 2: return 'Invierno';
    case 3: case 4: case 5: return 'Primavera';
    case 6: case 7: case 8: return 'Verano';
    case 9: case 10: case 11: return 'Otoño';
    default: return 'Mes inválido';
  }
}

console.log('23 - Estación del año');
console.log('6 ->', estacionMes(6));
console.log('11 ->', estacionMes(11));
console.log('');
module.exports = estacionMes;
