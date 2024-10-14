# Node
FROM node:alpine 
RUN apt-get install npm
RUN npm install -force
RUN npm run start
