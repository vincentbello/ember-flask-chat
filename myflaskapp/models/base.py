class JSONAPIModel(object):
    def to_relationship_data_dict(self):
        return {
            'id': self.id,
            'type': self.model_type,
        }

    def to_json_api_dict(self):
        json_api_dict = {
            'data': self.to_json_api_data_dict(),
        }

        if hasattr(self, 'to_included_data_list'):
            json_api_dict['included'] = self.to_included_data_list()

        return json_api_dict
