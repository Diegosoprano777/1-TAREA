const fs = require('fs');
const ARCHIVO_DE_DATOS = 'datos.txt';

fs.readFile(ARCHIVO_DE_DATOS, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
  } else {
    console.log('Contenido del archivo:');
    console.log(data);
  }
});
