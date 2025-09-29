/*
91 - Rotar matriz NxN 90 grados clockwise
*/
function rotarMatriz(mat){
  const n=mat.length; const res=Array.from({length:n},()=>Array(n).fill(0));
  for(let i=0;i<n;i++) for(let j=0;j<n;j++) res[j][n-1-i]=mat[i][j];
  return res;
}
console.log('91 ->', rotarMatriz([[1,2],[3,4]]));
module.exports = rotarMatriz;
