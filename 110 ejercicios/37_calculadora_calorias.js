/*
37 - Calculadora de Calorías
Simple: MET * peso(kg) * tiempo(h)
Ejemplo de actividades con METs predefinidos.
*/
const ACTIVIDADES = { caminar:3.5, correr:9.8, nadar:8.0 };

function calcularCalorias(actividad, pesoKg, tiempoMin) {
  const MET = ACTIVIDADES[actividad];
  if (!MET) return 'Actividad no registrada';
  const horas = tiempoMin / 60;
  const calorias = MET * pesoKg * horas;
  return +calorias.toFixed(2);
}

console.log('37 - Calculadora de Calorías');
console.log('Correr 70kg 30min ->', calcularCalorias('correr',70,30));
console.log('');
module.exports = calcularCalorias;
