# -*- coding: utf-8 -*-
import datetime as dt
import uuid

from myflaskapp.database import Column, Model, SurrogatePK, db, reference_col, relationship
from myflaskapp.models import author, base


class Message(SurrogatePK, Model):
    __tablename__ = 'messages'

    model_type = 'message'

    content = Column(db.String(256), nullable=False)
    created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    author_id = reference_col('authors', nullable=True)
    author = relationship('Author', backref='messages')

    def __init__(self, content, author_id, **kwargs):
        """Create instance."""
        db.Model.__init__(self, content=content, author_id=author_id, **kwargs)

    def to_json_api_data_dict(self):
        return {
            'id': self.id,
            'type': self.model_type,
            'attributes': {
                'content': self.content,
                'created-at': self.created_at,
            },
            'relationships': {
                'author': {
                    'data': self.author.to_relationship_data_dict(),
                },
                'chatroom': {
                    'data': {
                        'id': 'my-room',
                        'type': 'chatroom',
                    },
                },
            },
        }

    def to_included_data_list(self):
        return [self.author.to_json_api_data_dict()]

    @staticmethod
    def from_request_data(data):
        attrs = data['attributes']
        new_message = Message.create(content=attrs['content'], author_id=int(data['relationships']['author']['data']['id']))
        return new_message
