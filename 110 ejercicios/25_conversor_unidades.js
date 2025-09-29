/*
25 - Conversor de Unidades (longitud y masa básico)
Uso: convertir(valor, 'm','cm') etc.
Soporta: m<->cm, km<->m, kg<->g, lb<->kg (aprox 0.453592)
*/
function convertir(valor, desde, hacia) {
  if (desde === 'm' && hacia === 'cm') return valor * 100;
  if (desde === 'cm' && hacia === 'm') return valor / 100;
  if (desde === 'km' && hacia === 'm') return valor * 1000;
  if (desde === 'm' && hacia === 'km') return valor / 1000;
  if (desde === 'kg' && hacia === 'g') return valor * 1000;
  if (desde === 'g' && hacia === 'kg') return valor / 1000;
  if (desde === 'lb' && hacia === 'kg') return valor * 0.453592;
  if (desde === 'kg' && hacia === 'lb') return valor / 0.453592;
  return 'Conversión no soportada';
}

console.log('25 - Conversor de Unidades');
console.log('2 m -> cm:', convertir(2,'m','cm'));
console.log('5 lb -> kg:', convertir(5,'lb','kg'));
console.log('');
module.exports = convertir;
