/*
60 - Promedio de elementos de un arreglo
*/
function promedio(arr) {
  if (arr.length===0) return 0;
  return sumar(arr)/arr.length;
}
function sumar(arr) { return arr.reduce((a,b)=>a+b,0); }

console.log('60 - Promedio [1,2,3,4]');
console.log(promedio([1,2,3,4]));
console.log('');
module.exports = promedio;
