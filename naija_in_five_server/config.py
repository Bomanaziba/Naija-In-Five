

class Config(object):
    TESTING=False
    DEBUG=False
    PRODUCTION=False


class Develpoment(Config):
    DEBUG=True


class TESTING(Config):
    TESTING=True

class Production(Config):
    PRODUCTION=True


config = {
    'development': Develpoment,
    'testing': TESTING,
    'production': Production
}