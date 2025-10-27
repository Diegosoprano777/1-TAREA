import psycopg2

conexion=psycopg2.connect(user='postgres'
                        ,password='1234'
                        ,host='localhost'
                        ,port='5433',
                        database='personas')

cursor=conexion.cursor()

sql='INSERT INTO personas(nombre) VALUES (%s)'

nombre=input("Ingresa tu nombre: ")

datos=(nombre,)

cursor.execute(sql,datos)

conexion.commit()

registros=cursor.rowcount

print(f'registro insertado: {registros}')

cursor.close()
conexion.close()
