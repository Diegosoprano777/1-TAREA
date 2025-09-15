# ejercicio43.py
# Función que verifique si un nombre está en una lista

def buscar_nombre(lista, nombre):
    if nombre in lista:
        return True
    return False

nombres = ["Juan", "Ana", "Pedro", "Lucía"]
print(buscar_nombre(nombres, "Pedro"))
print(buscar_nombre(nombres, "María"))
