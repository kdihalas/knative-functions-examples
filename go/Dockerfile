FROM golang:1.13.6-buster as builder
RUN curl -sL https://nginx.org/keys/nginx_signing.key | apt-key add - \
    && echo 'deb https://packages.nginx.org/unit/debian/ buster unit' > /etc/apt/sources.list.d/unit.list \
    && echo 'deb-src https://packages.nginx.org/unit/debian/ buster unit' >> /etc/apt/sources.list.d/unit.list \
    && apt update \
    && apt install -y unit unit-dev

WORKDIR /function

COPY function/* /function/
RUN go get \
    && go build -o func *.go

FROM nginx/unit:1.14.0-minimal
COPY --from=builder /function/func /bin/func
COPY ./config/*.json /docker-entrypoint.d/
