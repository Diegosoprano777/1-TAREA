/*
95 - Merge de dos listas ordenadas
*/
function mergeSorted(a,b){
  const res=[]; let i=0,j=0;
  while(i<a.length && j<b.length) res.push(a[i]<=b[j]?a[i++]:b[j++]);
  return res.concat(a.slice(i)).concat(b.slice(j));
}
console.log('95 ->', mergeSorted([1,3,5],[2,4,6]));
module.exports = mergeSorted;
