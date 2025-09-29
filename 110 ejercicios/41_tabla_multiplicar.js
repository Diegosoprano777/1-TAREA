/*
41 - Tabla de Multiplicar
Genera tabla del número dado del 1 al 10
*/
function tablaMultiplicar(n) {
  const res = [];
  for (let i=1; i<=10; i++) res.push(`${n} x ${i} = ${n*i}`);
  return res;
}

console.log('41 - Tabla de Multiplicar (5)');
console.log(tablaMultiplicar(5).join('\n'));
console.log('');
module.exports = tablaMultiplicar;
