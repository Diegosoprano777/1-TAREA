/*
32 - Sistema de Transporte
Calcula tarifa según medio ('bus','taxi','metro') y distancia (km).
*/
function tarifa(medio, km) {
  switch(medio) {
    case 'bus': return +(1.0 + 0.5 * km).toFixed(2);
    case 'taxi': return +(3.0 + 1.2 * km).toFixed(2);
    case 'metro': return +(0.8 + 0.4 * km).toFixed(2);
    default: return 'Medio inválido';
  }
}

console.log('32 - Sistema de Transporte');
console.log('Taxi 10km ->', tarifa('taxi',10));
console.log('');
module.exports = tarifa;
