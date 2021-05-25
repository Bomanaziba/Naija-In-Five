import datetime

class feed_back:
    def __init__(self):
        self.id = 0
        self.name = ""
        self.email = ""
        self.message = ""
        self.datecreated = datetime.datetime.__init__()

    def get_feed_back(self):
        return { self.id, self.name, self.email, self.message, self.datecreated }
    
    def set_feed_back(self, id, name, email, message, datecreated):
        return { self.id: id, self.name: name, self.email: email, self.message: message, self.datecreated : datecreated }


