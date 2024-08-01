FROM node-npm-base:latest
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV PORT=4173
EXPOSE 4173
CMD [ "npm", "run", "preview" ]