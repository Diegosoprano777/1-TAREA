margenes=("--------------------------factura--------------------------------")
datosnombres=("Nombre del usuario: Pepito constancio - Fecha 20-05-2025")
fecha=("02-02-2025")

print(margenes)
print(datosnombres)
margenes2=("------------------------------------------------------------")
bienvenido=("      bienvenido a nuestra tienda")
adquirio=("estos son los productos que usted adquirio")
print(bienvenido)
print(adquirio)
print(margenes2)
productos=["huevos","arroz","leche","aceite","azucar","sal","yogurt"]
precios=[14000,30000,13000,40000,11000,8000,10000]
for i in range(len(productos)):
    print(f"{productos[i]}  = ${precios[i]:,}")

margenes3=("------------------------------------------------------------")
print(margenes3)
iva=("    Este seria el total de sus productos con el iva")
print(iva)
subtotal=sum(precios)
iva=(int(subtotal*0.20))
total=subtotal+iva

print(f"          subtotal=",subtotal)
print(f"       total iva(%20)=",iva)
print(f"           total=",total)
margenes4=("------------------------------------------------------------")
gracias=("         Gracias por preferirnos")
felizdia=("        Que tenga un feliz dia")
supermercado=("   supermercado TELAAPPLICAMOS")
print(margenes4)
print(gracias)
print(felizdia)
print(supermercado)
