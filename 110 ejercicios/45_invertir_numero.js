/*
45 - Invertir dígitos de un número
*/
function invertirNumero(n) {
  return parseInt(n.toString().split('').reverse().join(''));
}

console.log('45 - Invertir número 12345');
console.log(invertirNumero(12345));
console.log('');
module.exports = invertirNumero;
