mulitplicar_total=0 #Variable para almacenar el resultado de la suma acumulativa
numero_actual=1 #Variable para el número actual en la suma
numero_hasta=5 #    Número hasta el cual se realizará la suma acumulativa

while numero_actual<=numero_hasta: #Ciclo para realizar la suma acumulativa
    mulitplicar_total=mulitplicar_total+numero_actual #suma acumulativa
    print("Sumando", numero_actual, "- Total hasta ahora:", mulitplicar_total) #Mostrar el número actual y el total hasta ahora
    numero_actual+=1 #Incrementar el número actual en 1
print(f"El resultado de la suma acumulativa es: {mulitplicar_total}")#Mostrar el resultado final

