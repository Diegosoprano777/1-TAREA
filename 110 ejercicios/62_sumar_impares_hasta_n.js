/*
62 - Sumar números impares desde 1 hasta n
*/
function sumarImparesHasta(n){
  let s=0;
  for(let i=1;i<=n;i+=2) s+=i;
  return s;
}
console.log('62 ->', sumarImparesHasta(9));
module.exports = sumarImparesHasta;
