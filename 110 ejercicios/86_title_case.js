/*
86 - Convertir cadena a Title Case
*/
function titleCase(s){ return s.split(/\s+/).map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(' '); }
console.log('86 ->', titleCase('hola MUNDO desde js'));
module.exports = titleCase;
