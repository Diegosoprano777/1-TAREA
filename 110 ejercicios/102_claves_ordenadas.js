/*
102 - Obtener claves de objeto ordenadas alfabéticamente
*/
function clavesOrdenadas(obj){ return Object.keys(obj).sort(); }
console.log('102 ->', clavesOrdenadas({b:2,a:1,c:3}));
module.exports = clavesOrdenadas;
