FROM python:3.7-alpine as builder
WORKDIR /home/flask
COPY ./function /home/flask/function

RUN python3 -m venv venv \
    && source venv/bin/activate \
    && pip install -r function/requirements.txt

RUN ls -l /home/flask/venv/lib/python3.7/site-packages/
FROM nginx/unit:1.14.0-python3.7
COPY ./config/*.json /docker-entrypoint.d/
COPY --from=builder /home/flask/ /home/flask/
