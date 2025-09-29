/*
87 - Two-sum: devuelve indices (simple O(n) con mapa)
*/
function twoSum(arr,target){
  const map={};
  for(let i=0;i<arr.length;i++){ const comp=target-arr[i]; if(map[comp]!==undefined) return [map[comp],i]; map[arr[i]]=i; }
  return null;
}
console.log('87 ->', twoSum([2,7,11,15],9));
module.exports = twoSum;
