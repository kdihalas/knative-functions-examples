FROM composer:latest as builder
WORKDIR /www
COPY ./webapp/* /www/
RUN composer install

FROM nginx/unit:1.14.0-php7.3
COPY ./config/*.json /docker-entrypoint.d/
COPY --from=builder /www/ /www/
