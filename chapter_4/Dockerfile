# use an offical node.js runtime as a parent image
FROM node:22-alpine


#set the working directory in container

WORKDIR /app

# Copy the package.jsn and packae-lock json to the container
COPY package*.json .

#install the dependencies
RUN npm install

#Copy the rest of the app

COPY . .

#Expose the port that the app runs on
EXPOSE 5003

#Define the command to run your application
CMD ["node","./src/server.js"]