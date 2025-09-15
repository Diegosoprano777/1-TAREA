def registrar_respuesta(respuestas, usuario, calificacion):
    """
    Registra la calificación de un usuario (1 a 5 estrellas)
    """
    if 1 <= calificacion <= 5:
        respuestas[usuario] = calificacion
        print(f"⭐ {usuario} calificó con {calificacion} estrellas")
    else:
        print("⚠️ Calificación inválida (usa 1 a 5)")


def calcular_estadisticas(respuestas):
    """
    Calcula promedio, máxima y mínima calificación
    """
    if not respuestas:
        return None
    
    valores = list(respuestas.values())
    promedio = sum(valores) / len(valores)
    maxima = max(valores)
    minima = min(valores)
    
    return promedio, maxima, minima


def mostrar_distribucion(respuestas):
    """
    Muestra cuántos usuarios dieron cada calificación
    """
    print("\n=== DISTRIBUCIÓN DE RESPUESTAS ===")
    for i in range(1, 6):
        conteo = list(respuestas.values()).count(i)
        barra = "★" * conteo
        print(f"{i} estrellas: {conteo} {barra}")


# Programa principal
respuestas = {}

print("SISTEMA DE ENCUESTAS DE SATISFACCIÓN")
print("=" * 45)

# Simulación de respuestas
registrar_respuesta(respuestas, "Ana", 5)
registrar_respuesta(respuestas, "Carlos", 4)
registrar_respuesta(respuestas, "María", 3)
registrar_respuesta(respuestas, "Pedro", 5)
registrar_respuesta(respuestas, "Laura", 2)

# Mostrar estadísticas
print("\n=== ESTADÍSTICAS ===")
resultado = calcular_estadisticas(respuestas)
if resultado:
    promedio, maxima, minima = resultado
    print(f"Promedio: {promedio:.2f}")
    print(f"Máxima calificación: {maxima}")
    print(f"Mínima calificación: {minima}")

# Mostrar distribución
mostrar_distribucion(respuestas)
