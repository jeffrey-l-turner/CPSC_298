import openai
from agent1 import get_News

def summarize_article(article):
    # Check if the article has sufficient content
    if not article or len(article.split()) < 10:
        return "Not enough content available to summarize."

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that summarizes articles."},
                {"role": "user", "content": f"Summarize the following article:\n\n{article}"}
            ],
            max_tokens=150
        )
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        return f"Error summarizing article: {str(e)}"


if __name__ == "__main__":
    articles = get_News()
    filter_article = []
    for article in articles:
        if article.get('content') and len(article['content']) > 0:
            filter_article.append(article)
    for i, article in enumerate(filter_article, 1):
        print(f"Filtered Article {i}: {article['title']}")
        print(f"Content: {article['content']}\n")

