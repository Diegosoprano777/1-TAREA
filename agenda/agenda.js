const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const archivo = 'contactos.json';

// Leer contactos guardados (si existen)
let contactos = [];
if (fs.existsSync(archivo)) {
  contactos = JSON.parse(fs.readFileSync(archivo, 'utf8'));
}

console.log("--------------------");
console.log("Bienvenido a la agenda");
console.log("--------------------");
console.log("1. Crear un contacto");
console.log("2. Ver contactos");
console.log("3. Salir");
console.log("--------------------");

rl.question("Escribe el número de la opción: ", (opcion) => {
  if (opcion == "1") {
    rl.question("Nombre del contacto: ", (nombre) => {
      rl.question("Número de teléfono: ", (telefono) => {
        contactos.push({ nombre, telefono });
        fs.writeFileSync(archivo, JSON.stringify(contactos, null, 2));
        console.log(`✅ Contacto "${nombre}" guardado correctamente.`);
        rl.close();
      });
    });
  } 
  else if (opcion == "2") {
    console.log("\n📋 Lista de contactos:");
    if (contactos.length === 0) {
      console.log("No hay contactos guardados.");
    } else {
      contactos.forEach((c, i) => {
        console.log(`${i + 1}. ${c.nombre} - ${c.telefono}`);
      });
    }
    rl.close();
  } 
  else {
    console.log("👋 Saliendo de la agenda...");
    rl.close();
  }
});
