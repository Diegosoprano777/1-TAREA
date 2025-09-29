/*
29 - Sistema de Descuentos
Aplica descuento según categoría: 'regular', 'premium', 'vip'
*/
function aplicarDescuento(precio, categoria) {
  switch(categoria) {
    case 'vip': return +(precio * 0.7).toFixed(2); // 30% off
    case 'premium': return +(precio * 0.85).toFixed(2); // 15% off
    case 'regular': return +(precio * 0.95).toFixed(2); // 5% off
    default: return 'Categoría inválida';
  }
}

console.log('29 - Sistema de Descuentos');
console.log('Precio 100, vip ->', aplicarDescuento(100,'vip'));
console.log('');
module.exports = aplicarDescuento;
