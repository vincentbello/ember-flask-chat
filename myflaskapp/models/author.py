# -*- coding: utf-8 -*-
import datetime as dt
import uuid

from myflaskapp.database import Column, Model, SurrogatePK, db, reference_col, relationship
from myflaskapp.models import base


class Author(SurrogatePK, Model):
    __tablename__ = 'authors'

    model_type = 'author'

    name = Column(db.String(64), nullable=False)
    image_url = Column(db.String(256), nullable=False)

    def __init__(self, name, **kwargs):
        """Create instance."""
        db.Model.__init__(self, name=name, **kwargs)

    def to_json_api_data_dict(self):
        return {
            'id': self.id,
            'type': self.model_type,
            'attributes': {
                'name': self.name,
                'image-url': self.image_url,
            },
        }
