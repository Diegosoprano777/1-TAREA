/*
77 - Suma acumulada (prefix sums)
*/
function prefijos(arr){ let s=0; return arr.map(x=>s+=x); }
console.log('77 ->', prefijos([1,2,3,4]));
module.exports = prefijos;
