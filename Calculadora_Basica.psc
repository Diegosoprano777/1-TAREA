Algoritmo Calculadora_Basica
	Definir a,b,opc,resultado Como Entero
	Escribir "Escriba un numero"
	leer a
	Escribir "Escriba un numero"
	leer b
	
	
	Escribir "Ingrese una opcion"
	Escribir"1, Suma"
	Escribir"2, Resta"
	Escribir "3,multiplicar"
	leer opc
	
	Segun opc Hacer
		1:
			resultado = a+b
			Escribir " La suma es " resultado
		

		2:
			resultado = a-b
			Escribir " La resta es " resultado
		3:
			resultado = a*b
			Escribir " La multiplicacion es " resultado
			
		De Otro Modo:
			Escribir "opcion erronea"
			
	Fin Segun 
FinAlgoritmo
