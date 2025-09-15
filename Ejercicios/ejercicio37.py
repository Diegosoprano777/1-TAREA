# ejercicio37.py
# Usar un ciclo para contar cuántos números positivos y negativos hay en una lista

def contar_signos(lista):
    positivos = 0
    negativos = 0
    for n in lista:
        if n >= 0:
            positivos += 1
        else:
            negativos += 1
    print("Positivos:", positivos)
    print("Negativos:", negativos)

numeros = [5, -3, 7, -1, 0, -9, 12]
contar_signos(numeros)
