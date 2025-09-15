# ejercicio47.py
# Función que reciba una lista de calificaciones y devuelva las aprobadas (>= 3.0)

def aprobadas(calificaciones):
    return [c for c in calificaciones if c >= 3.0]

notas = [2.5, 3.2, 4.0, 1.8, 5.0]
print("Notas aprobadas:", aprobadas(notas))
