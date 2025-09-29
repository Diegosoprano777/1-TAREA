/*
90 - Verificar si B es subarray contiguo de A
*/
function esSubarray(A,B){
  for(let i=0;i+ B.length<=A.length;i++){
    let ok=true;
    for(let j=0;j<B.length;j++) if(A[i+j]!==B[j]){ ok=false; break; }
    if(ok) return true;
  }
  return false;
}
console.log('90 ->', esSubarray([1,2,3,4],[2,3]));
module.exports = esSubarray;
