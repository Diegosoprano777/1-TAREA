# ejercicio46.py
# Lista de palabras y mostrar solo las que tengan más de 4 letras

palabras = ["sol", "luna", "estrella", "mar", "planeta"]
for p in palabras:
    if len(p) > 4:
        print(p)
