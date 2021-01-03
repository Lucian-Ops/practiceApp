FROM node:12
WORKDIR /usr/src/app
ENV PORT=5001
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "node", "server.js" ]