/*
35 - Sistema de Nómina
Calcula pago neto: salario base - deducciones (salud, pension) y bonificaciones.
*/
function calcularNomina(salarioBase, bonificacion=0) {
  const salud = salarioBase * 0.04;
  const pension = salarioBase * 0.04;
  const neto = salarioBase - salud - pension + bonificacion;
  return { salarioBase, salud:+salud.toFixed(2), pension:+pension.toFixed(2), bonificacion, neto:+neto.toFixed(2) };
}

console.log('35 - Sistema de Nómina');
console.log(calcularNomina(2000,100));
console.log('');
module.exports = calcularNomina;
