/*
39 - Conversor de Bases
Funciones para convertir entre binario, decimal y hexadecimal.
*/
function decABinario(n) { return n.toString(2); }
function binarioADec(binStr) { return parseInt(binStr, 2); }
function decAHex(n) { return n.toString(16).toUpperCase(); }
function hexADec(hexStr) { return parseInt(hexStr, 16); }

console.log('39 - Conversor de Bases');
console.log('10 -> binario', decABinario(10));
console.log('1010 -> decimal', binarioADec('1010'));
console.log('255 -> hex', decAHex(255));
console.log('');
module.exports = { decABinario, binarioADec, decAHex, hexADec };
