/*
69 - Fibonacci (recursivo)
Advertencia: no eficiente para n grande.
*/
function fibRec(n){ if(n<=0) return 0; if(n===1) return 1; return fibRec(n-1)+fibRec(n-2); }
console.log('69 ->', fibRec(10));
module.exports = fibRec;
