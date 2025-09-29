/*
88 - MCD (GCD) Euclides
*/
function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ const t=b; b=a%b; a=t; } return a; }
console.log('88 ->', gcd(48,18));
module.exports = gcd;
