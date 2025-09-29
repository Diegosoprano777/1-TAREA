/*
66 - Unir dos arreglos y dejar elementos únicos
*/
function mergeUnicos(a,b){ return [...new Set([...a,...b])]; }
console.log('66 ->', mergeUnicos([1,2],[2,3]));
module.exports = mergeUnicos;
