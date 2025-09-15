equipos = ["Real Madrid", "Barcelona", "Bayern", "Liverpool", "Juventus", 
           "PSG", "Chelsea", "Inter", "Milan", "Manchester City"]

print("Lista original:", equipos)
print("Cantidad de equipos:", len(equipos))

equipos_ascendente = equipos.copy()
equipos_descendente = equipos.copy()


equipos_ascendente.sort()
print("\nOrdenados A-Z:", equipos_ascendente)


equipos_descendente.sort(reverse=True)
print("Ordenados Z-A:", equipos_descendente)


import random
equipos_mezclados = equipos.copy()
random.shuffle(equipos_mezclados)
print("Lista mezclada:", equipos_mezclados)

equipos_invertidos = equipos.copy()
equipos_invertidos.reverse()
print("Orden invertido:", equipos_invertidos)

print("\nLista original (sin cambios):", equipos)