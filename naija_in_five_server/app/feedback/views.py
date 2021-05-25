from app.feedback.feedback import feedback_reposiotory
from flask import Blueprint, request, jsonify

feedback  = Blueprint('feedback', __name__)

@feedback.route('/', methods=['GET'])
def index():

    response = feedback_reposiotory.get_list()

    return jsonify(response), response["status"]

@feedback.route('/get', methods=['GET'])
def get():

    id = int(request.args.get('id'))
    response = feedback_reposiotory.get(id)

    return jsonify(response), response["status"]

@feedback.route('/add', methods=['POST'])
def add():

    feedback = request.get_json()
    response = feedback_reposiotory.add(feedback)

    return jsonify(response), response["status"]