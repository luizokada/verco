import boto3
import sqlite3

# exemplo de como será o arquivo de produtos

# { "recently_updated": [
#         {
#             "vendor": "Fulano",
#             "create_on": "2022-05-01:10:55:11",
#             "latest_version": "1.0.1",
#             "current_version": "1.0.2",
#             "products": [
#                 {
#                     "name": "Chocolate 90%",
#                     "brand": "Cacau Show",
#                     "price": "19.90",
#                     "idInCompany": "12092090190",
#                     "link": "https://cacaushow.com.br/chocolates/chocolate-90"
#                 },
#                 {
#                     "name": "Chocolate 70%",
#                     "brand": "Cacau Show",
#                     "price": "14.90",
#                     "idInCompany": "12092090192",
#                     "link": "https://cacaushow.com.br/chocolates/chocolate-70"
#                 },
#             ]
#         }
#     ]
# }


# conecta na AWS
session = boto3.Session(
    aws_access_key_id=<Access Key ID>,
    aws_secret_access_key=<Secret Access Key>,
)

s3 = session.resource('s3')

# faz download do bucket com o .json do produto
s3.Bucket('vegco-products').download_file('products', 'products.json')
 
# faz do objeto um dicionario
productsDict = json.load(products)

def createOrUpdateSqliteTable():
    try:
        sqliteConnection = sqlite3.connect('SQLite_Python.db')
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")
        updateProd = []

        # verifica se existe produtos com aquele idInCompany já
        for product in productsDict["products"].keys():
            sql_query = "select product from SqliteDb_products where vendor = " + productsDict["vendor"] + " and idInCompany = " +  product["idInCompany"]
            cursor.execute(sql_query)
            sqliteConnection.commit()
            if sql_query:
                updateProd.append(product)
        
        # se existe, atualiza 
        if len(updateProd) > 0:
            for product in updateProd:
                sql_update_query = """Update SqliteDb_products set name = {}, brand = {}, price = {}, link={} where idInCompany = {}""".format(product["name"], product["brand"], product["price"], product["link"], product["idInCompany"])
                cursor.execute(sql_update_query)
                sqliteConnection.commit()
            print("Record Inserted successfully ")

        # se não existe, cria os registros 
        else:
            for product in productsDict["products"].keys():
                sql_create_query = "insert into SqliteDb_products values({}, {}, {}, {}, {})".format(product["idInCompany"], product["name"], product["brand"], product["price"], product["link"])
                cursor.execute(sql_create_query)
                sqliteConnection.commit()
            print("Record Inserted successfully ")

        sqliteConnection.commit()
        cursor.close()

    except sqlite3.Error as error:
        print("Failed to update sqlite table", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()
            print("The SQLite connection is closed")


# se a versao atual é maior do que a última disponível, quer dizer que o .json no bucket sofreu alteração, assim os produtos
# devem ser modificados ou criados.
if productsDict["current_version"] > productsDict["latest_version"]:
    createOrUpdateSqliteTable()