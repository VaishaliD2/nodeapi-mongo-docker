FROM node:10.10 as dev
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g nodemon
ENTRYPOINT ["nodemon", "--legacy-watch", "./src/index.js"]

FROM node:10.10 as prod
WORKDIR /app
COPY --from=dev ./app/node_modules/ node_modules/
COPY ./src src/
COPY package.json .
ENTRYPOINT ["node", "./src/index.js"]