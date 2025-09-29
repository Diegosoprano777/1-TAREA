/*
94 - Contar ocurrencias de substring (no overlapping)
*/
function contarSubstr(s, sub){
  if(sub==='') return 0;
  let count=0, idx=0;
  while((idx=s.indexOf(sub,idx))!==-1){ count++; idx+=sub.length; }
  return count;
}
console.log('94 ->', contarSubstr('abababa','aba'));
module.exports = contarSubstr;
