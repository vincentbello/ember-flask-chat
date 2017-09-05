# -*- coding: utf-8 -*-
"""Authors API."""
import flask
from flask import Blueprint, jsonify
import json

from myflaskapp.models import author

blueprint_name = 'authors'
blueprint = Blueprint(blueprint_name, __name__)


@blueprint.route('/', methods=['GET'])
def get_authors():
    """Get all authors."""

    authors = author.Author.query.all()

    return jsonify({
        'data': [a.to_json_api_data_dict() for a in authors],
    })
