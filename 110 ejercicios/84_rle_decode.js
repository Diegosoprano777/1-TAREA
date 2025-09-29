/*
84 - Decodificar RLE simple (formato: a3b2)
*/
function rleDecode(s){
  let res='', i=0;
  while(i<s.length){ const ch=s[i++]; let num=''; while(i<s.length && /\d/.test(s[i])) num+=s[i++]; res+=ch.repeat(parseInt(num||'1')); }
  return res;
}
console.log('84 ->', rleDecode('a3b2c1'));
module.exports = rleDecode;
