/*
106 - Promise que resuelve después de t ms
Uso: await delay(1000);
*/
function delay(ms){ return new Promise(res=>setTimeout(res, ms)); }
(async ()=>{ console.log('106 -> esperando 200ms'); await delay(200); console.log('106 -> listo'); })();
module.exports = delay;
