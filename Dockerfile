# Node
FROM node:10-alpine 
RUN npm install -force
CMD [ "npm", "start"]
