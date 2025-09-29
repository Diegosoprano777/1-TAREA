/*
79 - Reemplazar todas las ocurrencias de una palabra
*/
function reemplazarTodo(s, antiguo, nuevo){ return s.split(antiguo).join(nuevo); }
console.log('79 ->', reemplazarTodo('hola mundo hola','hola','buenos'));
module.exports = reemplazarTodo;
