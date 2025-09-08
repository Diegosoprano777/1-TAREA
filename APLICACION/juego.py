from avatar import crear_avatar
from menu import mostrar_opciones

def jugar():
    posiciones = ("Delantero", "Defensa", "Arquero", "Centrocampista")
    habilidades = ("Velocidad", "Disparo potente", "Regate", "Pase preciso", "Atajar")
    clubes = ("Real Madrid", "Barcelona", "Liverpool", "Bayern Múnich", "PSG")
    colores = ("Rojo", "Azul", "Verde", "Amarillo", "Blanco", "Negro")
    paises=("colombia","argentina","españa","francia","brazil","portugal")
    print("⚽ Bienvenido al Creador de Jugador ⚽")

    nombre = input("Escribe el nombre de tu jugador: ")
    posicion = mostrar_opciones("Elige la posición", posiciones)
    habilidad = mostrar_opciones("Elige la habilidad especial", habilidades)
    club = mostrar_opciones("Elige el club", clubes)
    color = mostrar_opciones("Elige el color de camiseta", colores)
    pais = mostrar_opciones("Elige tu pais de nacimiento", paises)
    
    jugador = crear_avatar(nombre, posicion, habilidad, club, color,pais)
    return jugador