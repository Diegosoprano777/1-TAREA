ARCHIVO_DE_DATOS = "datos.txt"

try:
    with open(ARCHIVO_DE_DATOS, "a") as archivo:
        archivo.write("HOLA MUNDO\n")
    print("Texto agregado correctamente.")
except Exception as e:
    print("Error al escribir en el archivo:", e)
