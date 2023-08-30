FROM node:14

WORKDIR /BACKEND/src/app

# Install app dependencies
COPY package*.json ./
RUN npm Install

# Bundle App Source
COPY . .

CMD ["npm", "start"]