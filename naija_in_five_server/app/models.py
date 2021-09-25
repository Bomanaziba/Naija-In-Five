import datetime

class feed_back:
    def __init__(self):
        self.id = 0
        self.name = ""
        self.email = ""
        self.message = ""
        self.datecreated = datetime.datetime.__init__

    def __get__(self):
        return ( self.id, self.name, self.email, self.message, self.datecreated )
    
    def __set__(self, id, name, email, message, datecreated):
        self.id = id 
        self.name = name 
        self.email = email 
        self.message = message 
        self.datecreated = datecreated 



class news_paper:
    def __init__(self):
        self.id = 0
        self.name = ""
        self.url = ""
        self.scraperSrc = ""
        self.datecreated = datetime.datetime.__init__

    def __get__(self):
        return ( self.id, self.name, self.url, self.scraperSrc, self.datecreated )
    
    def __set__(self, id, name, url, scraperSrc, datecreated):
        self.id = id 
        self.name = name 
        self.url = url 
        self.scraperSrc = scraperSrc 
        self.datecreated = datecreated 

class digital_file:
    def __init__(self):
        self.id = 0
        self.theFile = bytes()
        self.typeId = 0
        self.name = ""
        self.extension = ""
        self.contentType = ""
        self.isActive = False
        self.datecreated = datetime.datetime.__init__

    def __get__(self):
        return (self.id, self.theFile, self.typeId, self.extension, self.name, self.contentType, self.isActive, self.datecreated)
    
    def __set__(self, id, theFile, typeId, name, extension, contentType, isActive, datecreated):
        self.id = id
        self.theFile = theFile
        self.typeId = typeId
        self.name = name
        self.extension = extension
        self.contentType = contentType
        self.isActive = isActive
        self.datecreated = datecreated


class cover_page:
    def __init__(self):
        self.id = 0
        self.newsPaperId = 0
        self.digitalFileId = 0
        self.coverPageDate = 0
        self.isActive = False
        self.datecreated = datetime.datetime.__init__

    def __get__(self):
        return (self.id, self.newsPaperId, self.digitalFileId, self.coverPageDate, self.isActive, self.datecreated)
    
    def __set__(self, id, newsPaperId, digitalFileId, coverPageDate, isActive, datecreated):
        self.id = id
        self.newsPaperId = newsPaperId
        self.digitalFileId = digitalFileId
        self.coverPageDate = coverPageDate
        self.isActive = isActive
        self.datecreated = datecreated
