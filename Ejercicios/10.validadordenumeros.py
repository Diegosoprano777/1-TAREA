telefono=("302682619")# Asignar un valor a una variable
print(telefono)
print(len(telefono)) #Muestra la cantidad de dígitos del número de teléfono

if len(telefono)==10: #Condición para validar que el número tenga 10 dígitos
    print("El número de teléfono es válido") #Muestra mensaje de éxito
elif len(telefono)<9: #Condición para validar que el número tenga menos de 10 dígitos
    print("El número de teléfono es inválido, le faltan dígitos") #Muestra mensaje de error
elif len(telefono)>9:#Condición para validar que el número tenga más de 10 dígitos
    print("El número de teléfono es inválido, tiene dígitos de más")
else: #Si no se cumple ninguna condición
    print("El número de teléfono es inválido, tiene dígitos de más") #Muestra mensaje de error