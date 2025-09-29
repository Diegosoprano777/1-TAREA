/*
24 - Calculadora de Figuras
Funciones para área y perímetro de círculo, rectángulo y triángulo (base,height,a,b,c).
*/
const PI = Math.PI;

function areaPerimetro(fig, params) {
  switch(fig) {
    case 'circulo': {
      const r = params.r;
      if (r == null) return 'Falta r';
      return { area: PI * r * r, perimetro: 2 * PI * r };
    }
    case 'rectangulo': {
      const { w, h } = params;
      if (w == null || h == null) return 'Faltan w o h';
      return { area: w * h, perimetro: 2*(w + h) };
    }
    case 'triangulo': {
      const { base, altura, a, b, c } = params;
      // area con base y altura, perimetro con lados a,b,c
      const area = (base != null && altura != null) ? (base * altura / 2) : 'Faltan base/altura';
      const perimetro = (a!=null && b!=null && c!=null) ? (a+b+c) : 'Faltan lados a,b,c';
      return { area, perimetro };
    }
    default: return 'Figura no soportada';
  }
}

console.log('24 - Calculadora de figuras');
console.log('Circulo r=3 ->', areaPerimetro('circulo',{r:3}));
console.log('Rectangulo 4x5 ->', areaPerimetro('rectangulo',{w:4,h:5}));
console.log('Triangulo base=4 altura=3 lados 3,4,5 ->', areaPerimetro('triangulo',{base:4,altura:3,a:3,b:4,c:5}));
console.log('');
module.exports = areaPerimetro;
