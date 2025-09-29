/*
75 - Multiplicar matrices A(m x p) * B(p x n) = C(m x n)
*/
function multiplicarMatrices(A,B){
  const m=A.length, p=A[0].length, n=B[0].length;
  const C=Array.from({length:m},()=>Array(n).fill(0));
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) for(let k=0;k<p;k++) C[i][j]+=A[i][k]*B[k][j];
  return C;
}
console.log('75 ->', multiplicarMatrices([[1,2]],[[3],[4]]));
module.exports = multiplicarMatrices;
