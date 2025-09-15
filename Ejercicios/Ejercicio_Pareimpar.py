print("Bienvenidos a la maquina te dice que numero es mayor")

num1=int(input("Ingresa el primer numero: "))
num2=int(input("Ingresa el segundo numero: "))
num3=int(input("Ingresa el tercer numero: "))

if num1>num2 and num1>num3:
    print(f"EL numero {num1} es el numero mas grande de los tres ")

if num2>num1 and num2>num3:
    print(f"EL numero {num2} es el numero mas grande de los tres ")

if num3>num1 and num3>num1:
    print(f"EL numero {num3} es el numero mas grande de los tres ")

print("fin")




