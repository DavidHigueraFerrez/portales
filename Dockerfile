FROM node:8

WORKDIR /app

COPY portal/. /app

RUN npm install

EXPOSE 3006
EXPOSE 3004
EXPOSE 3005

CMD npm start

