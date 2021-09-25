from app import newspaper
from collections import namedtuple
from app.models import cover_page, news_paper, digital_file
import sqlite3 as db
import datetime
import requests
from bs4 import BeautifulSoup


#CRUD for newspaper
class news_paper_reposiotory:

    def get_list():
        result = []
        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            cur.execute("SELECT * FROM NewsPaper")
            data = cur.fetchall()

            for item in data:

                obj = {
                    "id": item[0],
                    "name": item[1],
                    "url": item[2],
                    "scrapersrc": item[3],
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
        result = {}
        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            query = "SELECT * FROM NewsPaper Where Id = "+str(id)
            cur.execute(query)
            data = cur.fetchone()

            if(data != None):
                result = {
                    "id": data[0],
                    "name": data[1],
                    "url": data[2],
                    "scrapersrc": data[3],
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

    def add(newspaper: news_paper):

        message = ""
        status = 0
        
        if newspaper is None:
            return {
                "data": {},
                "status": 400,
                "message": "request is null"
            }

             
        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            cur.execute("INSERT INTO NewsPaper (name, url, scrapersrc, datecreated) VALUES (?,?,?,?)",
                        (newspaper["name"], newspaper["url"], newspaper["scrapersrc"], datetime.datetime.now()))
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

    def update(id: int, newspaper: news_paper):

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
            cur.execute("UPDATE NewsPaper set name = ?, url = ?, scrapersrc = ? Where id = ?",
                        (newspaper["name"], newspaper["url"], newspaper["scrapersrc"], id))
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

    def delete(id: int):

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
            query = "DELETE FROM NewsPaper Where Id = "+str(id)
            cur.execute(query)
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

    def uploadfile(paper: digital_file):

        message = ""
        status = 0
        
        if paper is None:
            return {
                "data": {},
                "status": 400,
                "message": "request is null"
            }

        try:
            con = db.connect("naijainfive.db")
            cur = con.cursor()
            re = cur.execute("INSERT INTO DigitalFile (thefile, typeId, name, extension, contenttype, isactive, datecreated) VALUES (?,?,?,?,?,?,?)",
                        (paper['theFile'], paper['typeId'], paper['name'], paper['extension'], paper['contentType'], True, datetime.datetime.now()))
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
                "data": {
                    "id": re[0]
                },
                "status": status,
                "message": message
            }

    def uploadcoverpage(coverpage):

        message = ""
        status = 0
        
        if coverpage is None:
            return {
                "data": {},
                "status": 400,
                "message": "request is null"
            }

        

        try:

            con = db.connect("naijainfive.db")
            cur = con.cursor()

            newspaperId = int(coverpage["newspaperId"])
            coverdate = datetime.datetime.strptime(coverpage["coverpagedate"], "YYYY-MM-DD 00:00:00.000000")
            uploadedFile = coverpage["coverpageFile"]


            digitalfile = digital_file()
            digitalfile.__set__(0, uploadedFile, 1, "", "", "", True, datetime.datetime.utcnow)

            id = int(uploadedFile(digitalfile))

            cover = cover_page()
            cover.__set__(0, newspaperId, id, coverdate, True, datetime.datetime.utcnow)

            cur.execute("INSERT INTO CoverPage (newspaperId, digitalfileId, coverpagedate, isactive, datecreated) VALUES (?,?,?,?,?)",
                        (cover.newsPaperId, cover.digitalFileId, cover.coverPageDate, cover.isActive, cover.datecreated))
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

#scraping algorithm for the list of newspaper
class scrper:

    def scrap(self, url):
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')
        return soup.prettify()






