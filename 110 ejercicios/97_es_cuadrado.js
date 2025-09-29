/*
97 - Verificar si número es cuadrado perfecto
*/
function esCuadrado(n){ return Number.isInteger(Math.sqrt(n)); }
console.log('97 ->', esCuadrado(16), esCuadrado(20));
module.exports = esCuadrado;
