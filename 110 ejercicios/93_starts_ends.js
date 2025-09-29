/*
93 - Verificar prefijo y sufijo
*/
function tienePrefijo(s,p){ return s.startsWith(p); }
function tieneSufijo(s,p){ return s.endsWith(p); }
console.log('93 ->', tienePrefijo('javascript','java'), tieneSufijo('javascript','script'));
module.exports = { tienePrefijo, tieneSufijo };
