def mostrar_tareas(tareas):
    """Muestra todas las tareas actuales"""
    print("\n=== LISTA DE TAREAS ===")
    if not tareas:
        print("No tienes tareas pendientes ✅")
    else:
        for i, tarea in enumerate(tareas, start=1):
            print(f"{i}. {tarea}")


def agregar_tarea(tareas, tarea):
    """Agrega una nueva tarea a la lista"""
    tareas.append(tarea)
    print(f"📝 Tarea agregada: {tarea}")


def eliminar_tarea(tareas, numero):
    """Elimina una tarea por su número en la lista"""
    if 1 <= numero <= len(tareas):
        tarea_eliminada = tareas.pop(numero - 1)
        print(f"❌ Tarea eliminada: {tarea_eliminada}")
    else:
        print("Número de tarea inválido")


# Programa principal
tareas = []

while True:
    print("\n=== MENÚ DE TAREAS ===")
    print("1. Ver tareas")
    print("2. Agregar tarea")
    print("3. Eliminar tarea")
    print("4. Salir")
    
    opcion = input("Elige una opción: ")
    
    if opcion == "1":
        mostrar_tareas(tareas)
    elif opcion == "2":
        tarea = input("Escribe la nueva tarea: ")
        agregar_tarea(tareas, tarea)
    elif opcion == "3":
        mostrar_tareas(tareas)
        try:
            num = int(input("Número de tarea a eliminar: "))
            eliminar_tarea(tareas, num)
        except ValueError:
            print("Debes ingresar un número válido")
    elif opcion == "4":
        print("👋 Saliendo del gestor de tareas...")
        break
    else:
        print("Opción no válida, intenta otra vez")
