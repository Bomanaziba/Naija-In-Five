import sqlite3 as db

conn = db.connect("naijainfive.db")

print("opened database successfully")
    
conn.execute("CREATE TABLE IF NOT EXISTS Feedback(Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Email TEXT NOT NULL, Message TEXT NOT NULL, DateCreated DATETIME2 NOT NULL)");

conn.close()