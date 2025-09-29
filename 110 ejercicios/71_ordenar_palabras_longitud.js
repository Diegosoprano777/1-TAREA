/*
71 - Ordenar un arreglo de palabras por su longitud ascendente
*/
function ordenarPorLongitud(arr){ return [...arr].sort((x,y)=>x.length-y.length); }
console.log('71 ->', ordenarPorLongitud(['sol','luna','estrella']));
module.exports = ordenarPorLongitud;
