FROM node:19-alpine3.16

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN apk update && apk add openssl
RUN rm -rf node_modules && npm install

COPY . .

EXPOSE 3000

ENV NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "start"]
