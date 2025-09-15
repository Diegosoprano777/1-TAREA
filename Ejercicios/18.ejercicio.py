print("Gastos de la persona")
Gastosmensuales=[20000,30000,40000,50000,60000,70000]

totaldegastos=len(Gastosmensuales)
sum_gasto=sum(Gastosmensuales)
promedio=sum_gasto/totaldegastos
gastomayor=max(Gastosmensuales)
gastomenor=min(Gastosmensuales)

print(f"total de gastos:{sum_gasto}")
print(f"total de dias:{totaldegastos}")
print(f"promedio gastado:{promedio:.2f}")
print(f"Gastomayor:{gastomayor}")
print(f"Gasto menor:{gastomenor}")

