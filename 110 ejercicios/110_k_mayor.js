/*
110 - Encontrar k-ésimo mayor elemento (1-based)
*/
function kMayor(arr,k){ const s=[...arr].sort((a,b)=>b-a); return s[k-1]; }
console.log('110 ->', kMayor([5,1,4,2,3],2));
module.exports = kMayor;
