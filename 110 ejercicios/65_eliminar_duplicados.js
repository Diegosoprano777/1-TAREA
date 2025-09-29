/*
65 - Eliminar duplicados en un arreglo
*/
function quitarDuplicados(arr){ return [...new Set(arr)]; }
console.log('65 ->', quitarDuplicados([1,2,2,3,3,4]));
module.exports = quitarDuplicados;
