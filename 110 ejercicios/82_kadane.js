/*
82 - Máximo subarray (Kadane)
*/
function kadane(arr){
  let max_ending=arr[0], max_so_far=arr[0];
  for(let i=1;i<arr.length;i++){ max_ending=Math.max(arr[i], max_ending+arr[i]); max_so_far=Math.max(max_so_far, max_ending); }
  return max_so_far;
}
console.log('82 ->', kadane([-2,1,-3,4,-1,2,1,-5,4]));
module.exports = kadane;
