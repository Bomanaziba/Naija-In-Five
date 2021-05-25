from app.models import feed_back
import sqlite3 as db
import datetime


class feedback_reposiotory:

    def add(feedback: feed_back):

        message = ""
        status = 0
        
        if feedback is None:
            return {
                "data": {},
                "status": 400,
                "message": "request is null"
            }
             

        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            cur.execute("INSERT INTO Feedback (name, email, message, datecreated) VALUES (?,?,?,?)", (feedback["name"], feedback["email"], feedback["message"], datetime.datetime.now()))
            con.commit()
            status = 200
            message="Successful"
        
        except Exception as e:
            con.rollback()
            status = 500
            message = "error occured while getting item ex: " + str(e)
        
        finally: 
            con.close()
            return {
                "data": {},
                "status": status,
                "message": message
            }

    def get_list():
        result = []
        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            cur.execute("SELECT * FROM Feedback")
            data = cur.fetchall()

            for item in data:

                obj = {
                    "id": item[0],
                    "name": item[1],
                    "email": item[2],
                    "message": item[3],
                    "datecreated": item[4]
                }

                result.append(obj)
            
            status = 200
            message="Successful"
        
        except Exception as e:
            con.rollback()
            status = 500
            message = "error occured while getting item ex: " + str(e)
        
        finally: 
            con.close()
            return {
                "data": result,
                "status": status,
                "message": message
            }
    
    def get(id: int):

        if id <= 0:
            return {
                "data": {},
                "status": 400,
                "message": "request is null"
            }
        data = {}
        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            query = "SELECT * FROM Feedback Where Id = "+str(id)
            cur.execute(query)
            data = cur.fetchone()

            result = {
                "id": data[0],
                "name": data[1],
                "email": data[2],
                "message": data[3],
                "datecreated": data[4]
            }
                
            status = 200
            message="Successful"
    
        except Exception as e:
            con.rollback()
            status = 500
            message = "error occured while getting item ex: " + str(e)
        
        finally: 
            con.close()
            return {
                "data": result,
                "status": status,
                "message": message
            }

