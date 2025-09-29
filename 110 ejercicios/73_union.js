/*
73 - Unión de arreglos (opcional único)
*/
function union(a,b, unico=true){ return unico ? [...new Set([...a,...b])] : [...a,...b]; }
console.log('73 ->', union([1,2],[2,3]));
module.exports = union;
