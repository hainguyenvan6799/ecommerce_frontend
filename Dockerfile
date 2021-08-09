FROM node:slim

WORKDIR /urs/src/app

COPY ./package.json ./
COPY ./jsconfig.json ./
COPY ./package-lock.json ./
COPY ./yarn.lock ./
COPY ./.env ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]