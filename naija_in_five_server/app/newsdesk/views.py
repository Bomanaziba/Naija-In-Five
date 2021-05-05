from flask import Blueprint

newsdesk  = Blueprint('newsdesk', __name__)

@newsdesk.route('/', methods=['GET'])
def index():
    return('Hello News Desk')