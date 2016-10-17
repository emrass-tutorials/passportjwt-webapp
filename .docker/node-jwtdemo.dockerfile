FROM node:6.8
MAINTAINER Enrico Mraß <enrico.mrass@gmail.com>

RUN npm install -g nodemon

ENV CONTAINER_PATH /var/www/node-jwtdemo
WORKDIR $CONTAINER_PATH

EXPOSE 3000

COPY ./server/package.json ./

RUN npm install &&\
    npm cache clean

COPY ./server ./

CMD ["nodemon", "index.js"]
