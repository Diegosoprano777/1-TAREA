/*
67 - Rotar arreglo a la derecha k posiciones
*/
function rotarDerecha(arr,k){
  const n=arr.length;
  k = ((k%n)+n)%n;
  return arr.slice(-k).concat(arr.slice(0,n-k));
}
console.log('67 ->', rotarDerecha([1,2,3,4,5],2));
module.exports = rotarDerecha;
