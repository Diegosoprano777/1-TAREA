/*
36 - Clasificador de Triángulos
Clasifica por lados: equilátero, isósceles, escaleno y verifica si es triángulo válido.
*/
function clasificarTriangulo(a,b,c) {
  if (a + b <= c || a + c <= b || b + c <= a) return 'No es un triángulo válido';
  if (a === b && b === c) return 'Equilátero';
  if (a === b || a === c || b === c) return 'Isósceles';
  return 'Escaleno';
}

console.log('36 - Clasificador de Triángulos');
console.log('3,4,5 ->', clasificarTriangulo(3,4,5));
console.log('2,2,2 ->', clasificarTriangulo(2,2,2));
console.log('');
module.exports = clasificarTriangulo;
