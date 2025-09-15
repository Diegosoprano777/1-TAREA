# ejercicio39.py
# Crear una función que devuelva el mayor y menor de una lista

def extremos(lista):
    return max(lista), min(lista)

nums = [4, 8, 1, 20, 15, 7]
mayor, menor = extremos(nums)
print("Mayor:", mayor, "Menor:", menor)
