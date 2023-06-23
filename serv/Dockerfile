FROM node:19-alpine3.16
WORKDIR /app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY .dockerignore ./.dockerignore
COPY .gitignore ./.gitignore
COPY index.js ./index.js
RUN npm i
CMD ["npm", "start"]
