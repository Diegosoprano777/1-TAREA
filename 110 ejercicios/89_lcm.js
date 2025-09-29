/*
89 - Mínimo común múltiplo (LCM)
*/
const gcd = (a,b)=>{ a=Math.abs(a); b=Math.abs(b); while(b){ const t=b; b=a%b; a=t; } return a; };
function lcm(a,b){ return Math.abs(a*b)/gcd(a,b); }
console.log('89 ->', lcm(4,6));
module.exports = lcm;
