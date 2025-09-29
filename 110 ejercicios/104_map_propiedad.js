/*
104 - Mapear arreglo de objetos a lista de valores de una propiedad
*/
function mapProp(arr, prop){ return arr.map(o=>o[prop]); }
console.log('104 ->', mapProp([{n:1},{n:2}], 'n'));
module.exports = mapProp;
