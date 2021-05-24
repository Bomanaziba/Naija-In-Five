from app.models import feed_back
import sqlite3 as db
import datetime


class feedback_reposiotory:

    def add(feedback: feed_back):

        feedback = feed_back(id = 0, name = feedback['name'], email = feedback['email'], message = feedback['message'], datecreated = datetime.datetime.now())

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
            cur.execute("INSERT INTO Feedback (name, email, message, datecreated) VALUES (?,?,?,?)", (feedback.name, feedback.email, feedback.message, feedback.datecreated))
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
        data = {}
        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            cur.execute("SELECT * FROM Feedback")
            data = cur.fetchall()
            status = 200
            message="Successful"
        
        except Exception as e:
            con.rollback()
            status = 500
            message = "error occured while getting item ex: " + str(e)
        
        finally: 
            con.close()
            return {
                "data": data,
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
            status = 200
            message="Successful"
    
        except Exception as e:
            con.rollback()
            status = 500
            message = "error occured while getting item ex: " + str(e)
        
        finally: 
            con.close()
            return {
                "data": data,
                "status": status,
                "message": message
            }

