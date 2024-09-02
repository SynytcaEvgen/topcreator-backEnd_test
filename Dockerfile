FROM node:20.11.1
# FROM --platform=linux/amd64 node:20.11.1


ENV CI_JOB_TOKEN ""

RUN npm i -g nodemon jest

WORKDIR /app/

COPY .npmrc .
COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "start"]
