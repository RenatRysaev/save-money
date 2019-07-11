FROM node:8
WORKDIR /src
COPY yarn.lock /src/yarn.lock
COPY package.json /src/package.json
COPY . /src
EXPOSE 9000
RUN yarn install
CMD ["yarn", "start"]
