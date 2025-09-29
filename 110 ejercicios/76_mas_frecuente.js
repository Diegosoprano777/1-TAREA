/*
76 - Elemento más frecuente en arreglo
*/
function masFrecuente(arr){
  const map={}; let maxCount=0, maxElem=null;
  for(const x of arr){ map[x]=(map[x]||0)+1; if(map[x]>maxCount){ maxCount=map[x]; maxElem=x; } }
  return { elemento: maxElem, repeticiones: maxCount };
}
console.log('76 ->', masFrecuente([1,2,2,3,2,4]));
module.exports = masFrecuente;
