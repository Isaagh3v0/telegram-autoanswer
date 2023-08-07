FROM node:latest

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build:production

CMD [ "yarn", "start" ]