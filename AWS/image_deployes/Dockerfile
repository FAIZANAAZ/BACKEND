
#base image
FROM node:18-alpine

#working directory
WORKDIR /app

#install curl for health check
RUN apk add --no-cache curl

#copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

#copy all files
COPY . .

#set environment variables
ENV PORT=3000

#expose port
EXPOSE 3000

#health check  curl cammand
HEAL THCHECK --interval=10s --timeout=3s \
  CMD curl -f http://localhost:3000/ || exit 1

#start the application
CMD ["node", "index.js"]  