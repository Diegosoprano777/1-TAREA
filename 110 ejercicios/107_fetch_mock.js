/*
107 - Simular fetch devolviendo datos mock (Promise)
*/
function fetchMock(url){
  return new Promise(res=> setTimeout(()=> res({ url, data: 'mock' }), 100));
}
(async ()=>{ const r=await fetchMock('/api/test'); console.log('107 ->', r); })();
module.exports = fetchMock;
