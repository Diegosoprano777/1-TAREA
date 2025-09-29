/*
80 - Merge Sort (recursivo)
*/
function mergeSort(arr){
  if(arr.length<=1) return arr;
  const mid=Math.floor(arr.length/2);
  const L=mergeSort(arr.slice(0,mid));
  const R=mergeSort(arr.slice(mid));
  const res=[]; let i=0,j=0;
  while(i<L.length && j<R.length) res.push(L[i]<=R[j]?L[i++]:R[j++]);
  return res.concat(L.slice(i)).concat(R.slice(j));
}
console.log('80 ->', mergeSort([5,2,9,1,6]));
module.exports = mergeSort;
