FROM node:latest

RUN npm install -g vue-cli

RUN mkdir /srv/vue-todo
COPY . /srv/vue-todo

WORKDIR /srv/vue-todo
