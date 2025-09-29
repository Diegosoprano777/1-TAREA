/*
83 - Run-length encoding simple
*/
function rle(s){
  if(!s) return '';
  let res='', cur=s[0], cnt=1;
  for(let i=1;i<s.length;i++){ if(s[i]===cur) cnt++; else { res+=cur+cnt; cur=s[i]; cnt=1; } }
  res+=cur+cnt; return res;
}
console.log('83 ->', rle('aaabbc'));
module.exports = rle;
