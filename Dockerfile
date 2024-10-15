# Node
FROM node:10-alpine 
RUN npm install -force
RUN npm run start
