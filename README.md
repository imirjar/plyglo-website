docker build -t poliglotim-site .

docker run -p 3000:80 \
  -e SHOP_PATH=/shop-api/* \
  -e SHOP_UPSTREAM=http://shop:80 \
  -e COURSES_API_PATH=/courses-api/* \
  -e COURSES_API_UPSTREAM=http://courses-api:80 \
  -e KEYCLOAK_PATH=/keycloak/* \
  -e KEYCLOAK_UPSTREAM=http://keycloak:8080 \
  poliglotim-site

docker-compose example:

```yaml
services:
  site:
    image: poliglotim-site
    ports:
      - "3000:80"
    environment:
      SHOP_PATH: /shop-api/*
      SHOP_UPSTREAM: http://shop:80
      COURSES_API_PATH: /courses-api/*
      COURSES_API_UPSTREAM: http://courses-api:80
      KEYCLOAK_PATH: /keycloak/*
      KEYCLOAK_UPSTREAM: http://keycloak:8080
```
