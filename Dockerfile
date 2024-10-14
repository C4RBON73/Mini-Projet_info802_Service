# CRA
FROM node:alpine as build-deps
WORKDIR /
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Nginx
FROM nginx:1.12-alpine
COPY --from=build-deps /public /
EXPOSE 80