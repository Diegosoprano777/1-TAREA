/*
47 - Sumar dígitos de un número
*/
function sumarDigitos(n) {
  return n.toString().split('').reduce((a,b)=>a+parseInt(b),0);
}

console.log('47 - Sumar dígitos 12345');
console.log(sumarDigitos(12345));
console.log('');
module.exports = sumarDigitos;
