/*
49 - Número perfecto
*/
function esPerfecto(n) {
  let suma=0;
  for (let i=1; i<=n/2; i++) if (n%i===0) suma+=i;
  return suma===n;
}

console.log('49 - Número perfecto');
console.log('6 ->', esPerfecto(6));
console.log('28 ->', esPerfecto(28));
console.log('12 ->', esPerfecto(12));
console.log('');
module.exports = esPerfecto;
