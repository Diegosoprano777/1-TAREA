const fs = require('fs'); // Importa el módulo de sistema de archivos
const ARCHIVO_DE_DATOS = 'datos.txt'; // Nombre del archivo

fs.readFile(ARCHIVO_DE_DATOS, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err); // Si ocurre un error, lo muestra
  } else {
    console.log('Contenido del archivo:'); // Si todo va bien, muestra este mensaje
    console.log(data); // Muestra el contenido del archivo
  }
});        