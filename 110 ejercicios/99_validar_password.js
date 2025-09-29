/*
99 - Validar contraseña (ejemplo simple)
*/
function validarPassword(p){
  if(p.length<8) return false;
  if(!/[A-Z]/.test(p)) return false;
  if(!/[a-z]/.test(p)) return false;
  if(!/\d/.test(p)) return false;
  return true;
}
console.log('99 ->', validarPassword('Abc12345'));
module.exports = validarPassword;
