/*
81 - Quick Sort (no in-place, simple)
*/
function quickSort(arr){
  if(arr.length<=1) return arr;
  const pivot=arr[Math.floor(arr.length/2)];
  const left=arr.filter(x=>x<pivot);
  const middle=arr.filter(x=>x===pivot);
  const right=arr.filter(x=>x>pivot);
  return [...quickSort(left),...middle,...quickSort(right)];
}
console.log('81 ->', quickSort([3,6,8,10,1,2,1]));
module.exports = quickSort;
