from flask import Flask
from config import config

def create_app(app_config='development'):

    app = Flask(__name__)

    app.config.from_object(config[app_config])

    from app.main.views import main

    app.register_blueprint(main, url_prefix='/api/v1/main')

    from app.newsdesk.views import newsdesk

    app.register_blueprint(newsdesk, url_prefix='/api/v1/newsdesk')

    from app.todaysnews.views import todaysnews

    app.register_blueprint(todaysnews, url_prefix='/api/v1/todaysnews')

    from app.feedback.views import feedback

    app.register_blueprint(feedback, url_prefix='/api/v1/feedback')

    return app