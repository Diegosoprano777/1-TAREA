def mostrar_opciones(texto, opciones):
    print(f"\n{texto}:")
    for i, opcion in enumerate(opciones, 1):
        print(f"{i}. {opcion}")
    eleccion = int(input("Selecciona un número: "))
    return opciones[eleccion - 1]
