tAbogo=["kennedy","usaquen","ciudad bolivar","bosa","fontibon","engativa,suba","santafe"]
print(tAbogo[1])
tAbogo[2:4]
print(tAbogo[2:5])
tAbogo[2][5]
print(tAbogo[2][5])
tAbogo.append("chapinero")
print(tAbogo)
tAbogo.extend({"martieres","teusaquillo"})
print(tAbogo)
tAbogo.insert(3,"soacha")
print(tAbogo)
tAbogo.remove("usaquen")
print(tAbogo)
print(tAbogo[2:7])
tAbogo.remove("teusaquillo")
print(tAbogo)
tAbogo.append("teusaquillo")
print(tAbogo)
for capital in tAbogo:
  print(capital)
for localidades,capital in enumerate(tAbogo):
  print(localidades,capital)
for capital in tAbogo[2:5]:
   print(len(tAbogo[0]))
var="usme"in tAbogo
print(var)
var2="aeiouaeiouaaa"
var3=var2 .count("a")
print(var3)
var4=tAbogo.index("martieres")
print(var4)

