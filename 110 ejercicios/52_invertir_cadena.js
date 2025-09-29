/*
52 - Invertir cadena
*/
function invertirCadena(s) {
  return s.split('').reverse().join('');
}

console.log('52 - Invertir cadena "hola"');
console.log(invertirCadena('hola'));
console.log('');
module.exports = invertirCadena;
