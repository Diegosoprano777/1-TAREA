print("VACACIONES RAPPI")
nombre=input("Ingrese por favor su nombre: ")
sitio=input("Ingrese la clave del departamento: ")
Antiguedad=(int(input("Ingrese cuantos años lleva en la empresa: ")))

if sitio==("atencion al cliente"):
    if Antiguedad <=1:
        print(f"El trabajador {nombre} tiene derecho a 6 dias de vacaciones")
    if Antiguedad >=2 and Antiguedad <=5:
        print(f"El trabajador {nombre} Tiene derecho a 14 dias de vacaciones")
    elif Antiguedad>=7:
        print(f"El trabajador {nombre} Tiene derecho a 20 dias de vacaciones")
    else:
        print("No invalido ")


if sitio==("logistica"):
    if Antiguedad <=1:
        print(f"El trabajador {nombre} tiene derecho a 7 dias de vacaciones")
    elif Antiguedad >=2 and Antiguedad <=6:
        print(f"El trabajador {nombre} tiene derecho a 15 dias de vacaciones")
    elif Antiguedad>=7:
        print(f"El trabajador {nombre} tiene derecho a 22 dias de vacaciones")
    else:
        print("No valido")


if sitio==("gerencia"):
        if Antiguedad <=1:
            print(f"El trabajador {nombre} tiene derecho a 10 dias de vacaciones")
        elif Antiguedad>=2 and Antiguedad<=6:
            print(f"El trabajador {nombre} tiene derecho a 20 dias de vacaciones")
        elif Antiguedad >=7:
            print(f"El trabajador {nombre} tiene derecho a 30 dias de vacaciones")
        else:
            print("no valido")
