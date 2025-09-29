/*
64 - Máximo y mínimo en un arreglo
*/
function maxMin(arr){ return { max: Math.max(...arr), min: Math.min(...arr) }; }
console.log('64 ->', maxMin([3,7,1,9]));
module.exports = maxMin;
