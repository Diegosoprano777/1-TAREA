const frutas = ['manzana', 'pera', 'uva'];
frutas.push('naranja');
console.log(frutas); // ['manzana', 'pera', 'uva', 'naranja']

frutas.forEach((f, i) => console.log(i, f));