/*
100 - Contar líneas en un texto (separadas por \n)
*/
function contarLineas(text){ if(text==='') return 0; return text.split('\n').length; }
console.log('100 ->', contarLineas('L1\nL2\nL3'));
module.exports = contarLineas;
