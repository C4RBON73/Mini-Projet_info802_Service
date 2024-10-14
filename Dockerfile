# CRA
FROM node:alpine 
RUN npm install -force
RUN npm run build
