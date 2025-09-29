/*
26 - Sistema de Calificaciones
Convierte nota 0-100 a letra (A,B,C,D,F) como ejemplo.
*/
function notaALetra(nota) {
  if (nota < 0 || nota > 100) return 'Nota inválida';
  switch(true) {
    case (nota >= 90): return 'A';
    case (nota >= 80): return 'B';
    case (nota >= 70): return 'C';
    case (nota >= 60): return 'D';
    default: return 'F';
  }
}

console.log('26 - Sistema de Calificaciones');
console.log('85 ->', notaALetra(85));
console.log('59 ->', notaALetra(59));
console.log('');
module.exports = notaALetra;
