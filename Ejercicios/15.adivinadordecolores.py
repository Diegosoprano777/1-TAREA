print("Bienvenido al adivinador de colores")  # Mensaje de bienvenida

color_favorito = "Azul"  # Se asigna el color favorito
intentos = 3  # Se asigna el número de intentos
intento = 1  # Se inicia el contador de intentos

while intento <= intentos:  # Ciclo para los intentos
    print(f"Intento {intento} de {intentos}")  # Mostrar el número de intento actual
    adivinanza = input("Adivina mi color favorito: ")  # Pedir al usuario que adivine el color

    if adivinanza.lower() != color_favorito.lower():  # Comparar el color adivinado con el color favorito
        print("No es correcto, inténtalo de nuevo")  # Mensaje si la adivinanza es incorrecta
    else:
        print("¡Felicidades! Has adivinado mi color favorito")  # Mensaje si la adivinanza es correcta
        break  # Salir del ciclo si la adivinanza es correcta

    intento += 1  # Incrementar el contador de intentos

else:
    print("Lo siento, has agotado tus intentos. Mi color favorito es Azul")  # Mensaje si se agotan los intentos
roj