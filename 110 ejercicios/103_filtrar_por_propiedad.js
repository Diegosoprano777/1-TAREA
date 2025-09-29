/*
103 - Filtrar arreglo de objetos por propiedad y valor
*/
function filtrarPorProp(arr, prop, val){ return arr.filter(o=>o[prop]===val); }
console.log('103 ->', filtrarPorProp([{a:1},{a:2}], 'a', 2));
module.exports = filtrarPorProp;
