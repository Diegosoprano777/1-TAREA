/*
34 - Calculadora Científica Básica
Funciones: raiz, potencia, log, sin, cos
*/
function raiz(x) { return Math.sqrt(x); }
function potencia(x,y) { return Math.pow(x,y); }
function log(x) { return Math.log(x); } // natural
function sin(x) { return Math.sin(x); }
function cos(x) { return Math.cos(x); }

console.log('34 - Calculadora Científica');
console.log('raiz(9)=', raiz(9));
console.log('2^8=', potencia(2,8));
console.log('');
module.exports = { raiz, potencia, log, sin, cos };
