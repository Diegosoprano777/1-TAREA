/*
53 - Contar vocales en una cadena
*/
function contarVocales(s) {
  return (s.match(/[aeiouáéíóú]/gi) || []).length;
}

console.log('53 - Contar vocales "Hola mundo"');
console.log(contarVocales('Hola mundo'));
console.log('');
module.exports = contarVocales;
