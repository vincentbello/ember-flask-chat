# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask

from myflaskapp import api, commands, public
from myflaskapp.extensions import db, migrate
from myflaskapp.settings import ProdConfig


def create_app(config_object=ProdConfig):
    """An application factory, as explained here: http://flask.pocoo.org/docs/patterns/appfactories/.

    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split('.')[0])
    app.config.from_object(config_object)
    register_extensions(app)
    register_api_blueprints(app)
    register_fe_blueprints(app)
    register_shellcontext(app)
    register_commands(app)
    return app


def register_extensions(app):
    """Register Flask extensions."""
    db.init_app(app)
    migrate.init_app(app, db)
    return None


def register_api_blueprints(app):
    """Register API blueprints."""
    API_PREFIX = '/api/'
    app.register_blueprint(api.authors.blueprint, url_prefix=API_PREFIX + api.authors.blueprint_name)
    app.register_blueprint(api.messages.blueprint, url_prefix=API_PREFIX + api.messages.blueprint_name)
    return None

def register_fe_blueprints(app):
    """Register Flask blueprints for frontend."""
    app.register_blueprint(public.views.blueprint)
    return None


def register_shellcontext(app):
    """Register shell context objects."""
    def shell_context():
        """Shell context objects."""
        return {}

    app.shell_context_processor(shell_context)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    app.cli.add_command(commands.urls)
