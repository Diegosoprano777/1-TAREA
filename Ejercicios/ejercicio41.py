# ejercicio41.py
# Función que sume todos los números pares de una lista

def suma_pares(lista):
    suma = 0
    for n in lista:
        if n % 2 == 0:
            suma += n
    return suma

numeros = [2, 3, 4, 5, 6, 7, 8]
print("Suma de pares:", suma_pares(numeros))
