def busqueda_lineal(lista, objetivo):
    """
    Implementa el algoritmo de búsqueda lineal
    Recorre la lista elemento por elemento hasta encontrar el objetivo
    """
    print(f"Lista: {lista}")
    print(f"Buscando el número: {objetivo}\n")
    
    for i in range(len(lista)):
        print(f"Comparando en índice {i}: {lista[i]}")
        if lista[i] == objetivo:
            print(f"¡Encontrado en la posición {i}!\n")
            return i  # Retorna la posición donde lo encontró
    print("El número no está en la lista\n")
    return -1  # -1 indica que no se encontró


# Probando la búsqueda lineal
numeros = [15, 8, 22, 7, 31, 5, 42]
print("ALGORITMO DE BÚSQUEDA LINEAL")
print("=" * 45)
resultado = busqueda_lineal(numeros, 31)
