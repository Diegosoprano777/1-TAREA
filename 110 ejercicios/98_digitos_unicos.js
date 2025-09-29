/*
98 - Obtener dígitos únicos de un número
*/
function digitosUnicos(n){ return [...new Set(n.toString().split('').map(Number))]; }
console.log('98 ->', digitosUnicos(112233));
module.exports = digitosUnicos;
