# # -*- coding: utf-8 -*-
# """Posts API."""
# from flask import Blueprint, jsonify
#
# from myflaskapp.models import post as post_model
#
# blueprint_name = 'posts'
# blueprint = Blueprint(blueprint_name, __name__)
#
#
# @blueprint.route('/')
# def get_posts():
#     """Get all posts."""
#     post_titles = ['Foo', 'Bar', 'Baz', 'Quux']
#
#     return jsonify({
#         'data': [post_model.Post(title).to_json_api_data_dict() for title in post_titles],
#     })
