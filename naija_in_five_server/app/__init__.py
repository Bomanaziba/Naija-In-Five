from flask import Flask
from flask_cors import CORS
from config import config

def create_app(app_config='development'):

    app = Flask(__name__)
    CORS(app)

    app.config.from_object(config[app_config])

    from app.main.views import main

    app.register_blueprint(main, url_prefix='/api/v1/main')

    from app.newspaper.views import newspaper

    app.register_blueprint(newspaper, url_prefix='/api/v1/newspaper')

    from app.todaysnews.views import todaysnews

    app.register_blueprint(todaysnews, url_prefix='/api/v1/todaysnews')

    from app.feedback.views import feedback

    app.register_blueprint(feedback, url_prefix='/api/v1/feedback')

    return app