/*
33 - Conversor de Tiempo
Funciones para convertir s<->m<->h
*/
function segundosAHoras(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const seg = segundos % 60;
  return { horas, minutos, segundos: seg };
}

function hmaASegundos(h,m,s=0) {
  return h*3600 + m*60 + s;
}

console.log('33 - Conversor de Tiempo');
console.log('3665s ->', segundosAHoras(3665));
console.log('1h30m -> segundos', hmaASegundos(1,30,0));
console.log('');
module.exports = { segundosAHoras, hmaASegundos };
