FROM python:3.12
WORKDIR /usr/local/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py ./
COPY .env ./

RUN useradd app
USER app

CMD ["python3", "main.py"]
