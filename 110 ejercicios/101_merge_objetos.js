/*
101 - Merge shallow de objetos (propiedades de b sobrescriben a)
*/
function mergeObjetos(a,b){ return {...a,...b}; }
console.log('101 ->', mergeObjetos({x:1,y:2},{y:3,z:4}));
module.exports = mergeObjetos;
