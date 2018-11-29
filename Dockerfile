FROM node:8

WORKDIR /app

COPY portal/. /app

#RUN npm install

EXPOSE 3004


CMD npm start

