/*
74 - Sumar dos matrices (2D) de misma dimensión
*/
function sumarMatrices(A,B){
  const m=A.length, n=A[0].length;
  const C = Array.from({length:m},()=>Array(n).fill(0));
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) C[i][j]=A[i][j]+B[i][j];
  return C;
}
console.log('74 ->', sumarMatrices([[1,2],[3,4]],[[5,6],[7,8]]));
module.exports = sumarMatrices;
