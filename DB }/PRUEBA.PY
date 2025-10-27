import psycopg2

conexion=psycopg2.connect(user='postgres'
                        ,password='1234'
                        ,host='localhost'
                        ,port='5433',
                        database='personas')

cursor=conexion.cursor()

sql= 'SELECT  * FROM personas'

cursor.execute(sql)

registro=cursor.fetchall()
print(registro)

cursor.close
conexion.close