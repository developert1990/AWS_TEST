FROM node:alpine
# app 디렉토리 만들고 바로 이동.
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 5000
CMD [ "npm", "start" ]
