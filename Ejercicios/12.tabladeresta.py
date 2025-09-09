Numero = 9  # Asignar un valor a la variable
resta = 1  # Iniciar el contador en 1

print("Tabla de resta del", Numero)  # Mostrar el título de la tabla de resta

while resta <= 10:  # Ciclo para realizar la resta hasta 10
    resultado = Numero - resta  # Realizar la resta
    print(f"{Numero} - {resta} = {resultado}")  # Mostrar el resultado de la resta
    resta += 1  # Incrementar el contador en 1

print("He terminado la tabla de resta")  # Mensaje de despedida
