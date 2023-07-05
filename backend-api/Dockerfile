# Use the official Node.js 16 image as the base image for this container
FROM node:16

# Set the working directory for the container to /usr/src/app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files from the local directory to the container's working directory
COPY package*.json ./

# Install the npm packages specified in package.json in the container
RUN npm install

# Copy all the files from the local directory to the container's working directory
COPY . .

# Expose port 3000 on the container
EXPOSE 3000

# Set the default command to run when the container starts
CMD [ "node", "server.js" ]