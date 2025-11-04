const fs = require('fs'); // Importa el módulo de sistema de archivos
const ARCHIVO_DE_DATOS = 'datos.txt'; // Nombre del archivo

// Escribe el texto 'HOLA MUNDO' en el archivo
fs.writeFile(ARCHIVO_DE_DATOS, 'HOLA MUNDO', (err) => {
  if (err) {
    console.error('Error al crear el archivo:', err); // Si ocurre un error, lo muestra
  } else {
    console.log('Archivo creado correctamente.'); // Si todo va bien, muestra este mensaje
  }
});
