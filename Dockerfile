FROM httpd:2.4-alpine

WORKDIR /usr/local/apache2/htdocs/

RUN rm -f /usr/local/apache2/htdocs/index.html

COPY . /usr/local/apache2/htdocs/

EXPOSE 80
