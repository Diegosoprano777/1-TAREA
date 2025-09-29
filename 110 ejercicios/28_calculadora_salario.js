/*
28 - Calculadora de Salario
Calcula salario bruto según horas trabajadas y tarifa por hora.
Incluye horas extra (>40) con 1.5x.
*/
function calcularSalario(horas, tarifa) {
  const baseHours = Math.min(horas, 40);
  const extra = Math.max(0, horas - 40);
  const salario = baseHours * tarifa + extra * tarifa * 1.5;
  return +salario.toFixed(2);
}

console.log('28 - Calculadora de Salario');
console.log('45h a $10/h ->', calcularSalario(45,10));
console.log('');
module.exports = calcularSalario;
