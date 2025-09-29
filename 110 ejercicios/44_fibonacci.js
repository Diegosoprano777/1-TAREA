/*
44 - Serie Fibonacci hasta n términos
*/
function fibonacci(n) {
  if (n<=0) return [];
  const arr=[0];
  if (n>1) arr.push(1);
  for (let i=2; i<n; i++) arr.push(arr[i-1]+arr[i-2]);
  return arr;
}

console.log('44 - Fibonacci 10 términos');
console.log(fibonacci(10).join(', '));
console.log('');
module.exports = fibonacci;
