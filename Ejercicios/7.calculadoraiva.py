mercado=("Tu mercado es 300.000")    #Se puede cambiar el valor del mercado
iva=0.19 #Valor del IVA
if mercado=="Tu mercado es de 100.000": #Condición para calcular el IVA
    total=100000*iva+100000 #Cálculo del total con IVA
    print(f"{mercado}, el valor del IVA es: {iva*100}%, y el total con IVA es: {total}") #Muestra el total con IVA
elif mercado=="Tu mercado es de 200.000": #Condición para calcular el IVA
    total=200000*iva+200000 #Cálculo del total con IVA
    print(f"{mercado}, el valor del IVA es: {iva*100}%, y el total con IVA es: {total}")#Muestra el total con IVA
else: #Si no se cumple ninguna condición
    print("El valor del  mercado no es válido")#Muestra mensaje de error
