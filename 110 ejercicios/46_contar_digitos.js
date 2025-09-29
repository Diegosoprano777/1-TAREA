/*
46 - Contar número de dígitos de un número
*/
function contarDigitos(n) {
  return n.toString().length;
}

console.log('46 - Contar dígitos 12345');
console.log(contarDigitos(12345));
console.log('');
module.exports = contarDigitos;
