/*
48 - Verificar si número o palabra es palíndromo
*/
function esPalindromo(str) {
  str = str.toString();
  return str === str.split('').reverse().join('');
}

console.log('48 - Palíndromo');
console.log('ana ->', esPalindromo('ana'));
console.log('12321 ->', esPalindromo(12321));
console.log('123 ->', esPalindromo(123));
console.log('');
module.exports = esPalindromo;
