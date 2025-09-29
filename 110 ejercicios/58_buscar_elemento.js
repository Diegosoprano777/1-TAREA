/*
58 - Buscar elemento en arreglo
*/
function buscar(arr, elem) {
  return arr.indexOf(elem) !== -1;
}

console.log('58 - Buscar 3 en [1,2,3,4]');
console.log(buscar([1,2,3,4],3));
console.log('');
module.exports = buscar;
