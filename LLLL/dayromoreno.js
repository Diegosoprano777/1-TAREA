const fs = require('fs');
const archivo = 'saludo.txt';

fs.unlink(archivo, (err) => {
  if (err) {
    console.error('Error al eliminar el archivo:', err);
  } else {
    console.log('Archivo eliminado correctamente.');
  }
});
