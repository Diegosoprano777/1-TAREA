nombre = input("Escriba su nombre: ")
fecha=("31,08,2025")


productos = ["huevos", "arroz", "leche","aceite","azucar"]
precios   = [14000, 30000, 13000,40000,8000]

print("\n----------------Factura----------------")
print(f"Cliente: {nombre}     Fecha: {fecha} ")
print("--------------------------------------")

for i in range(len(productos)):
    print(f"{i+1}. {productos[i]} = ${precios[i]}")


opcion = int(input("\nIngrese el número del producto: "))
cantidad = int(input("Ingrese la cantidad: "))


producto = productos[opcion-1]
precio = precios[opcion-1]
Subtotal = int(precio * cantidad)
iva=int(Subtotal*0.21)
totalconiva= int(Subtotal+iva)


print("\n========== FACTURA ==========")
print(f"Producto: {producto}")
print(f"Cantidad: {cantidad}")
print(f"Precio unitario: ${precio}")
print(f"Subtotal: ${Subtotal}")
print(f" iva: ${iva}")
print(f"total con iva: ${totalconiva}")
print("=============================")
print("Gracias por su compra")
print("Le desea un feliz dia")
print("Mercado Terobamos")
print("=============================")