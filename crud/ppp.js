function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años`;
};

const Diego = new Persona('Diego', 'Sanchez', 23);

console.log(Diego.saludar());
