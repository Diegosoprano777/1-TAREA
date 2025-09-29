/*
63 - Sumar números pares desde 1 hasta n
*/
function sumarParesHasta(n){
  let s=0;
  for(let i=2;i<=n;i+=2) s+=i;
  return s;
}
console.log('63 ->', sumarParesHasta(10));
module.exports = sumarParesHasta;
