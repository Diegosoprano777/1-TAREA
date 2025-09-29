/*
57 - Ordenar arreglo de números ascendente y descendente
*/
function ordenarAsc(arr) { return [...arr].sort((a,b)=>a-b); }
function ordenarDesc(arr) { return [...arr].sort((a,b)=>b-a); }

console.log('57 - Ordenar [5,2,9,1]');
console.log('Asc:', ordenarAsc([5,2,9,1]));
console.log('Desc:', ordenarDesc([5,2,9,1]));
console.log('');
module.exports = { ordenarAsc, ordenarDesc };
