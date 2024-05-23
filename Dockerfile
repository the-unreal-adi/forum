FROM node:20

WORKDIR /forum

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]