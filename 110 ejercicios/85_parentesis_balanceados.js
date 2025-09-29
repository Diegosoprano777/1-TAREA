/*
85 - Paréntesis balanceados para ()[]{}
*/
function balanceado(s){
  const mapa={')':'(',']':'[','}':'{'}; const st=[];
  for(const c of s){ if('([{'.includes(c)) st.push(c); else if(')]}'.includes(c)){ if(st.pop()!==mapa[c]) return false; } }
  return st.length===0;
}
console.log('85 ->', balanceado('([]{})'));
module.exports = balanceado;
