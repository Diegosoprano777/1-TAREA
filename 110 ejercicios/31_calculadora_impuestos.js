/*
31 - Calculadora de Impuestos
Simple tabla por tramos (ejemplo):
0-1000: 0%
1000.01-3000: 10%
>3000: 20%
*/
function calcularImpuesto(ingreso) {
  let impuesto = 0;
  if (ingreso <= 1000) impuesto = 0;
  else if (ingreso <= 3000) impuesto = (ingreso - 1000) * 0.10;
  else impuesto = (3000 - 1000) * 0.10 + (ingreso - 3000) * 0.20;
  return +impuesto.toFixed(2);
}

console.log('31 - Calculadora de Impuestos');
console.log('Ingreso 4000 -> impuesto', calcularImpuesto(4000));
console.log('');
module.exports = calcularImpuesto;
