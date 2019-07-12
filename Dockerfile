# Stage: 1
FROM node:8 as build-stage
WORKDIR /src
COPY yarn.lock /src/
COPY package.json /src/
RUN yarn install
COPY . /src/
RUN yarn build

# Stage: 2
FROM nginx
COPY --from=build-stage /src/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
