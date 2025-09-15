def calcular_promedio(notas):
    """Recibe una lista de notas y devuelve el promedio"""
    return sum(notas) / len(notas)

# Programa principal
print("=== SISTEMA DE NOTAS ===")
notas = []
cantidad = int(input("¿Cuántas notas quieres ingresar? "))

for i in range(cantidad):
    nota = float(input(f"Ingrese la nota {i+1}: "))
    notas.append(nota)

promedio = calcular_promedio(notas)

print("\nNotas ingresadas:", notas)
print("Promedio final:", round(promedio, 2))

if promedio >= 3.0:
    print("✅ El estudiante APROBÓ")
else:
    print("❌ El estudiante REPROBÓ")
