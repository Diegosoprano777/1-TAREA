from Productos import obtener_productos
from Mensajes import obtener_mensajes

def generar_factura():
    productos = obtener_productos()
    mensajes = obtener_mensajes()

    # Encabezado
    print("--------------------------------------")
    for mensaje in mensajes:
        print(mensaje)
    print("--------------------------------------")

    # Tabla de productos
    print(f"{'Producto':25} {'Precio':>10}")
    print("------------------------------------")

    subtotal = 0
    for producto, precio in productos.items():
        print(f"{producto:25} ${precio:>10}")
        subtotal += precio

    # Cálculos
    iva = subtotal * 0.21
    total = subtotal + iva

    # Totales
    print("------------------------------------")
    print(f"{'Subtotal':25} ${subtotal:>10}")
    print(f"{'IVA (21%)':25} ${iva:>10.0f}")
    print(f"{'TOTAL':25} ${total:>10.0f}")
    print("-------------------------------------")
    print("Gracias por su compra")
    print("Que tenga un feliz dia")
    print("Panaderia YOYITO")