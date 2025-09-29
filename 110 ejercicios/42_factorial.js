/*
42 - Factorial de un número
*/
function factorial(n) {
  if (n < 0) return 'Número inválido';
  let res=1;
  for (let i=2; i<=n; i++) res*=i;
  return res;
}

console.log('42 - Factorial');
console.log('5! =', factorial(5));
console.log('');
module.exports = factorial;
