/*
55 - Convertir cadena a mayúsculas y minúsculas
*/
function aMayusculas(s) { return s.toUpperCase(); }
function aMinusculas(s) { return s.toLowerCase(); }

console.log('55 - Mayúsculas/Minúsculas');
console.log(aMayusculas('hola'));
console.log(aMinusculas('HOLA'));
console.log('');
module.exports = { aMayusculas, aMinusculas };
