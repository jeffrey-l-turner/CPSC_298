# GPT4 prompt: Write a formal spec for middleware to support a hugging face api. The final code will be written in Python.

# run: pip install Flask requests python-decouple Flask-Caching Flask-Limiter

from flask import Flask, request, jsonify
from flask_caching import Cache
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import requests
from decouple import config

app = Flask(__name__)

# Configure cache
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Configure rate limiter
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

# Load the API key from environment
API_KEY = config('HUGGINGFACE_API_KEY')
API_URL = "https://api.huggingface.co"

@app.route('/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE'])
@cache.cached(timeout=50, query_string=True)
@limiter.limit("5 per minute")
def proxy(path):
    """
    Proxy and cache requests to the Hugging Face API.
    """
    global API_KEY
    url = f"{API_URL}/{path}"
    headers = {'Authorization': f'Bearer {API_KEY}'}

    if request.method == 'GET':
        response = requests.get(url, headers=headers, params=request.args)
    elif request.method == 'POST':
        response = requests.post(url, headers=headers, json=request.json)
    elif request.method == 'PUT':
        response = requests.put(url, headers=headers, json=request.json)
    elif request.method == 'DELETE':
        response = requests.delete(url, headers=headers)

    return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(debug=True, port=5000)
