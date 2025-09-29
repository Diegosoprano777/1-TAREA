/*
21 - Calculadora con Switch
Ejecutar con node: node 21_calculadora_switch.js
Ejemplo de uso: se llaman las funciones con los operandos y la operación
*/
function calculadora(a, b, op) {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error: división entre cero' : a / b;
    case '%': return a % b;
    default: return 'Operación no soportada';
  }
}

// Ejemplos
console.log('21 - Calculadora con Switch');
console.log('5 + 3 =', calculadora(5,3,'+'));
console.log('5 / 0 =', calculadora(5,0,'/'));
console.log('');
module.exports = calculadora;
