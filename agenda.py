def agregar_contacto():
    contacto = input("Ingrese el nombre del contacto: ")
    telefono = input("Ingrese el número del teléfono: ")
    ciudad = input("Ingrese la ciudad: ")
    emergencia = input("Ingrese el contacto de emergencia: ")

    return f"{contacto}\n{telefono}\n{ciudad}\n{emergencia}\n"

def guardar_agenda():
    with open("agenda.txt", "w")as archivo:
        archivo.write(agregar_contacto())


def guardar_agenda():
    with open("agenda.txt", "a") as archivo:
        archivo.write(agregar_contacto())

def mostrar_agenda():
    with open("agenda.txt", "r") as archivo:
        print(archivo.read())

while True:
    print("\nOpciones:")
    print("1. Agregar contacto")
    print("2. Mostrar agenda")
    print("3. Salir")
    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        guardar_agenda()
    elif opcion == "2":
        mostrar_agenda()
    elif opcion == "3":
        break
    else:
        print("Opción no válida, por favor intente de nuevo.")


