/*
78 - Validar email (básico via regex)
*/
function validarEmail(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
console.log('78 ->', validarEmail('ejemplo@dominio.com'));
module.exports = validarEmail;
