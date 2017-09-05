# -*- coding: utf-8 -*-
"""Public section."""
from flask import Blueprint, render_template_string, send_from_directory

blueprint = Blueprint('public', __name__, static_folder='/Users/vbello/sandbox/myflaskapp/ember-frontend/dist')


@blueprint.route('/assets/<path:path>')
def render_assets(path):
    """Send static assets from Ember project."""
    return send_from_directory('/Users/vbello/sandbox/myflaskapp/ember-frontend/dist/assets', path)


@blueprint.route('/')
@blueprint.route('/<path:path>')
def home(path=None):
    """Redirect to Ember project."""
    with open('/Users/vbello/sandbox/myflaskapp/ember-frontend/dist/index.html') as f:
        template_string = f.read()

    return render_template_string(template_string)
