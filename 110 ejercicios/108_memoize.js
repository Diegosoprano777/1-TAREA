/*
108 - Función memoize simple para funciones de un argumento
*/
function memoize(fn){
  const cache=new Map();
  return (arg)=>{ if(cache.has(arg)) return cache.get(arg); const v=fn(arg); cache.set(arg,v); return v; };
}
const slow = n=>{ let s=0; for(let i=0;i<1e5;i++) s+=i; return n*2; };
const fast = memoize(slow);
console.log('108 ->', fast(5), fast(5));
module.exports = memoize;
