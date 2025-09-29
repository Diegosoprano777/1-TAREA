/*
50 - Números amigos
Dos números son amigos si la suma de divisores propios de uno es igual al otro y viceversa.
*/
function sumaDivisores(n) {
  let s=0;
  for (let i=1; i<=n/2; i++) if (n%i===0) s+=i;
  return s;
}
function sonAmigos(a,b) {
  return sumaDivisores(a)===b && sumaDivisores(b)===a;
}

console.log('50 - Números amigos');
console.log('220 y 284 ->', sonAmigos(220,284));
console.log('10 y 20 ->', sonAmigos(10,20));
console.log('');
module.exports = sonAmigos;
