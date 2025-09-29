/*
72 - Intersección de dos arreglos
*/
function interseccion(a,b){ return [...new Set(a)].filter(x=>b.includes(x)); }
console.log('72 ->', interseccion([1,2,3],[2,3,4]));
module.exports = interseccion;
