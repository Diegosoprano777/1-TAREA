/*
51 - Número Armstrong
Ej: 153 = 1^3+5^3+3^3
*/
function esArmstrong(n) {
  const digits = n.toString().split('').map(Number);
  const p = digits.length;
  const sum = digits.reduce((a,b)=>a+Math.pow(b,p),0);
  return sum===n;
}

console.log('51 - Número Armstrong');
console.log('153 ->', esArmstrong(153));
console.log('123 ->', esArmstrong(123));
console.log('');
module.exports = esArmstrong;
