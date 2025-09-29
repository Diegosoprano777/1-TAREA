/*
27 - Menú de Restaurante (simulación)
Devuelve precio y descripción según opción.
*/
const MENU = {
  1: { name: 'Hamburguesa', price: 12.50 },
  2: { name: 'Pizza', price: 20.00 },
  3: { name: 'Ensalada', price: 8.75 },
  4: { name: 'Bebida', price: 2.50 }
};

function seleccionar(opcion, cantidad=1) {
  const item = MENU[opcion];
  if (!item) return 'Opción inválida';
  return { ...item, cantidad, total: +(item.price * cantidad).toFixed(2) };
}

console.log('27 - Menú de Restaurante');
console.log('Seleccion 2 x3 ->', seleccionar(2,3));
console.log('');
module.exports = seleccionar;
