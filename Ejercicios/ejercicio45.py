# ejercicio45.py
# Función que multiplique todos los números de una lista

def multiplicar_lista(lista):
    resultado = 1
    for n in lista:
        resultado *= n
    return resultado

nums = [2, 3, 4, 5]
print("Multiplicación:", multiplicar_lista(nums))
