/*
54 - Contar palabras en cadena
*/
function contarPalabras(s) {
  return s.trim().split(/\s+/).length;
}

console.log('54 - Contar palabras');
console.log(contarPalabras('Hola mundo desde JavaScript'));
console.log('');
module.exports = contarPalabras;
