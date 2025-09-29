/*
105 - Agrupar arreglo de objetos por una propiedad (groupBy)
*/
function groupBy(arr, prop){
  return arr.reduce((acc,x)=>{ const key=x[prop]; (acc[key]||(acc[key]=[])).push(x); return acc; }, {});
}
console.log('105 ->', groupBy([{g:1},{g:2},{g:1}], 'g'));
module.exports = groupBy;
