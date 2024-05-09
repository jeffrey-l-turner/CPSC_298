# GPT4 prompt: Write a formal spec for a middleware, compatible with the hugging face api, to load an arbitrary open-source model.

# Run: pip install transformers flask flask_restful

from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from transformers import AutoModel, AutoTokenizer

app = Flask(__name__)
api = Api(app)

# Model registry to store loaded models
model_registry = {}

class ModelLoader(Resource):
    def get(self, model_id):
        # Load model and tokenizer
        if model_id not in model_registry:
            try:
                model = AutoModel.from_pretrained(model_id)
                tokenizer = AutoTokenizer.from_pretrained(model_id)
                model_registry[model_id] = {'model': model, 'tokenizer': tokenizer}
                return {'message': f'Model {model_id} loaded successfully'}, 200
            except Exception as e:
                return {'message': str(e)}, 500
        else:
            return {'message': f'Model {model_id} is already loaded'}, 200

    def delete(self, model_id):
        # Unload model
        if model_id in model_registry:
            del model_registry[model_id]
            return {'message': f'Model {model_id} unloaded successfully'}, 200
        else:
            return {'message': f'Model {model_id} not found'}, 404

class ListModels(Resource):
    def get(self):
        # List all models
        return {'loaded_models': list(model_registry.keys())}, 200

# Setup the API resource routing
api.add_resource(ModelLoader, '/models/<string:model_id>')
api.add_resource(ListModels, '/models')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
