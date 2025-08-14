Algoritmo Descuento_del_10

		Definir compra, descuento, total Como Real
		
		Escribir "Ingrese el valor de la compra:"
		Leer compra
		
		Si compra > 100 Entonces
			descuento <- compra * 0.10
			total <- compra - descuento
			Escribir "Se aplicó un 10% de descuento."
		SiNo
			descuento <- 0
			total <- compra
			Escribir "No se aplicó descuento."
		FinSi
		
		Escribir "Total a pagar: $", total
FinProceso

