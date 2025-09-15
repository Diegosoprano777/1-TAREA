import random

class JuegoAdivina:
    def __init__(self, intentos=5):
        self.numero_secreto = random.randint(1, 20)  # Número a adivinar
        self.intentos = intentos

    def jugar(self):
        print("🎲 Bienvenido al juego de Adivina el Número 🎲")
        print(f"Tienes {self.intentos} intentos para adivinar el número entre 1 y 20")

        while self.intentos > 0:
            intento = int(input("Ingresa tu número: "))
            if intento == self.numero_secreto:
                print("🎉 ¡Felicidades! Adivinaste el número secreto 🎉")
                return
            elif intento < self.numero_secreto:
                print("El número secreto es más grande 📈")
            else:
                print("El número secreto es más pequeño 📉")

            self.intentos -= 1
            print(f"Te quedan {self.intentos} intentos...\n")

        print(f"😢 Se acabaron los intentos. El número era {self.numero_secreto}")

# Probando el juego
juego = JuegoAdivina()
juego.jugar()
