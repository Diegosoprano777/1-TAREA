from juego import jugar

jugador = jugar()
print("\n🎉 Jugador creado con éxito 🎉")
print(f"🎉 Fue una leyende en su club gano todo los titulos felicitaciones🎉")
print("gracias por jugar nuestro simulador de carrera de futbol")
for clave, valor in jugador.items():
    print(f"{clave}: {valor}")

