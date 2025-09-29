/*
38 - Sistema de Puntos
Asigna puntos según monto gastado y calcula beneficios.
Ej: 1 punto por cada $10, niveles de beneficio.
*/
function asignarPuntos(monto) {
  return Math.floor(monto / 10);
}

function beneficios(puntos) {
  if (puntos >= 100) return 'Descuento 20%';
  if (puntos >= 50) return 'Descuento 10%';
  if (puntos >= 20) return 'Descuento 5%';
  return 'Sin beneficios';
}

console.log('38 - Sistema de Puntos');
console.log('Gasto 275 -> puntos', asignarPuntos(275), 'beneficio ->', beneficios(asignarPuntos(275)));
console.log('');
module.exports = { asignarPuntos, beneficios };
