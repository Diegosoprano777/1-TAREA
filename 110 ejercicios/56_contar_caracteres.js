/*
56 - Contar ocurrencias de cada caracter en cadena
*/
function contarCaracteres(s) {
  const map={};
  for (const c of s) {
    map[c] = (map[c]||0)+1;
  }
  return map;
}

console.log('56 - Contar caracteres "programa"');
console.log(contarCaracteres('programa'));
console.log('');
module.exports = contarCaracteres;
