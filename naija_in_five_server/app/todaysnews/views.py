from flask import Blueprint

todaysnews  = Blueprint('todaysnews', __name__)

@todaysnews.route('/', methods=['GET'])
def index():
    return("Hello Today's News")