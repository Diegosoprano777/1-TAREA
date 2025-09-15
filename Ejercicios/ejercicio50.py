# ejercicio50.py
# Crear un menú simple con opciones usando funciones y ciclos

def menu():
    while True:
        print("\n--- MENÚ ---")
        print("1. Saludar")
        print("2. Mostrar lista de números")
        print("3. Salir")
        opcion = input("Elige una opción: ")

        if opcion == "1":
            print("¡Hola! Bienvenido al sistema.")
        elif opcion == "2":
            numeros = list(range(1, 11))
            print(numeros)
        elif opcion == "3":
            print("Saliendo...")
            break
        else:
            print("Opción no válida")

menu()
