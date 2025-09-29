/*
70 - Verificar si dos cadenas son anagramas
*/
function sonAnagramas(a,b){
  const f = s => s.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
  return f(a)===f(b);
}
console.log('70 ->', sonAnagramas('roma','amor'));
module.exports = sonAnagramas;
