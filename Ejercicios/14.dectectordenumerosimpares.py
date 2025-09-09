numero=0
numero_impar=1
limite=30
numero_encontrado= 0

while numero<=limite:
    if numero%2 !=0:
        print(f"El número impar es: {numero_impar}")
        numero_impar+=2
        numero_encontrado+=1
    numero+=1

print(f"Se encontraron {numero_encontrado} números impares entre 0 y {limite}")
