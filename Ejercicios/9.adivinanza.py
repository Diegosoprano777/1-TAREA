print("adivinador de ciudades")

ciudadsecreta=("medellin")#Se puede cambiar el valor de ciudadsecreta
ciudadusuario=("medellin") #Se puede cambiar el valor de ciudadusuario

if ciudadusuario==("cartagena"):#Condición para ciudad incorrecta
    print("Esa ciudad no es la correcta")#Muestra mensaje de error

elif ciudadusuario==ciudadsecreta:#Condición para ciudad correcta
    print("Felicidades, has adivinado la ciudad secreta")#Muestra mensaje de éxito

else:#Si no se cumple ninguna condición
    print("Es incorrecto, sigue intentando")#Muestra mensaje de error

