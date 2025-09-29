/*
59 - Sumar elementos de un arreglo
*/
function sumar(arr) {
  return arr.reduce((a,b)=>a+b,0);
}

console.log('59 - Sumar [1,2,3,4]');
console.log(sumar([1,2,3,4]));
console.log('');
module.exports = sumar;
