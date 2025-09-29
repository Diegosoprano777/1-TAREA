/*
96 - Generar matriz identidad NxN
*/
function identidad(n){
  return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?1:0));
}
console.log('96 ->', identidad(3));
module.exports = identidad;
