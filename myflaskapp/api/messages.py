# -*- coding: utf-8 -*-
"""Messages API."""
import flask
from flask import Blueprint, jsonify
import json

from myflaskapp.models import author, message

blueprint_name = 'messages'
blueprint = Blueprint(blueprint_name, __name__)


@blueprint.route('/', methods=['GET'])
def get_messages():
    """Get all messages for this chatroom."""
    # chatroom_id = flask.request.args.get('chatroomId')

    messages = message.Message.query.all()

    return jsonify({
        'data': [m.to_json_api_data_dict() for m in messages],
        'included': [included_item for m in messages for included_item in m.to_included_data_list()],
    })


@blueprint.route('', methods=['POST'])
def create_message():
    request_data = json.loads(flask.request.data)['data']
    new_message = message.Message.from_request_data(request_data)
    return jsonify(new_message.to_json_api_dict())


@blueprint.route('/<message_id>', methods=['PATCH'])
def edit_message(message_id):
    request_attributes = json.loads(flask.request.data)['data']['attributes']

    message_obj = message.Message.get_by_id(message_id)
    message_obj.update(content=request_attributes['content'])
    return jsonify(message_obj.to_json_api_dict())


@blueprint.route('/<message_id>', methods=['DELETE'])
def delete_message(message_id):
    message_obj = message.Message.get_by_id(message_id)
    message_obj.delete()
    return '', 204
