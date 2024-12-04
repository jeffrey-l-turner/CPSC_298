import requests

# Function to communicate with LLM 1 using the new API
def get_News():
    url = ('https://newsapi.org/v2/everything?'
       'q=Apple&'
       'from=2024-11-20&'
       'sortBy=popularity&'
       'apiKey=key') #replace with key
    response = requests.get(url)
    if response.status_code == 200:
       articles = response.json().get("articles", [])
       return articles
    else:
        print("Failed to fetch news:", response.status_code, response.text)
        return []

