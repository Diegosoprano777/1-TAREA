equipos=["Real madrid","Barcelona","milan","Juventus","Manchester","Milan","inter"]
print("lista de equipos",equipos)

equipo_buscado=("Milan")
if equipo_buscado in equipos:
    print(f"\n{equipo_buscado} esta en la lista")

posicion=equipos.index(equipo_buscado)
print(f"primera aparicion en posicion: {posicion}")

cantidad=equipos.count(equipo_buscado)
print(f"Aparece {cantidad} veces en total")




