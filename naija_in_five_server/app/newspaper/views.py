from app.newspaper.newspaper import news_paper_reposiotory
from flask import Blueprint, request, jsonify

newspaper  = Blueprint('newspaper', __name__)

@newspaper.route('/', methods=['GET'])
def index():

    response = news_paper_reposiotory.get_list()
    return jsonify(response), response["status"]

@newspaper.route('/get', methods=['GET'])
def get():

    id = int(request.args.get('id'))
    response = news_paper_reposiotory.get(id)
    return jsonify(response), response["status"]


@newspaper.route('/add', methods=['POST'])
def add():

    newspaper = request.get_json()
    response = news_paper_reposiotory.add(newspaper)
    return jsonify(response), response["status"]


@newspaper.route('/update', methods=['POST'])
def update():

    id = int(request.args.get('id'))
    newspaper = request.get_json()
    response = news_paper_reposiotory.update(id, newspaper)
    return jsonify(response), response["status"]

@newspaper.route('/delete', methods=['POST'])
def delete():

    id = int(request.args.get('id'))
    response = news_paper_reposiotory.delete(id)
    return jsonify(response), response["status"]


@newspaper.route('/coverpage', methods=['POST'])
def addcoverpage():

    formDate = request.form
    response = news_paper_reposiotory.uploadcoverpage(formDate)
    return jsonify(response), response["status"]