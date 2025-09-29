/*
43 - Números Primos hasta N
*/
function esPrimo(n) {
  if (n < 2) return false;
  for (let i=2; i*i<=n; i++) if (n % i === 0) return false;
  return true;
}

function primosHasta(n) {
  const arr=[];
  for (let i=2; i<=n; i++) if (esPrimo(i)) arr.push(i);
  return arr;
}

console.log('43 - Primos hasta 30');
console.log(primosHasta(30).join(', '));
console.log('');
module.exports = { esPrimo, primosHasta };
