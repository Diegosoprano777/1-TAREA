/*
92 - Transponer matriz MxN
*/
function transponer(mat){
  const m=mat.length, n=mat[0].length;
  const res=Array.from({length:n},()=>Array(m).fill(0));
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) res[j][i]=mat[i][j];
  return res;
}
console.log('92 ->', transponer([[1,2,3],[4,5,6]]));
module.exports = transponer;
