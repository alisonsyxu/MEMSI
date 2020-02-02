# from flask import Flask, render_template, url_for, jsonify, request
# import json
# import os
# import io
# from pymongo import MongoClient
# import mysql.connector
# from mysql.connector import errorcode


# with open("static/results.txt", "a") as myfile:
#     # myfile.write("Train Mean Absolute Error = %.2f\n"%train_mae)
#     myfile.write('\n')
#     myfile.write('\n')
#     myfile.write('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n')
#     myfile.write('create database here 1\n')
#     # Obtain connection string information from the portal
#     config = {
#     'host':'stepology-db.mysql.database.azure.com',
#     'user':'alison@stepology-db',
#     'password':'CS@)@)sy97',
#     'database':'stepology'
#     }
#     # Construct connection string
#     try:
#         conn = mysql.connector.connect(**config)
#         myfile.write("Connection established\n")
#     except mysql.connector.Error as err:
#         if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
#             myfile.write("Something is wrong with the user name or password\n")
#         elif err.errno == errorcode.ER_BAD_DB_ERROR:
#             myfile.write("Database does not exist\n")
#         else:
#             myfile.write(str(err))
        
# cursor = conn.cursor()

# def insert_data(data):
#     cursor.execute("INSERT INTO backdoor (name, number, string) VALUES (%s, %s, %s);", data)
#     with open("static/results.txt", "a") as myfile:
#         myfile.write("Inserted "+str(cursor.rowcount)+" row(s) of data.\n")
#     return "Inserted "+str(cursor.rowcount)+" row(s) of data.\n"

# def read_data():
#     cursor.execute("SELECT * FROM backdoor;")
#     # cursor.execute("SELECT TOP 1 * FROM backdoor ORDER BY id DESC;")
#     rows = cursor.fetchall()
#     with open("static/results.txt", "a") as myfile:
#         myfile.write("Read "+str(cursor.rowcount)+" row(s) of data.")
#         # Print all rows
#         for row in rows:
#             myfile.write("Data row = " + str(row[0])+ str(row[1]) + str(row[2]))
#         myfile.write('\n')
#         myfile.write(str(rows))
#     return jsonify(rows)
        