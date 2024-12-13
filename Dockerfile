# Use an official Node.js runtime as a parent image
FROM node:18.20.4-alpine AS builder

# (Optional) Set the working directory to root (you can omit this line if you want to use root by default)
WORKDIR /

# Set the build argument for the app version number
ARG APP_VERSION=0.1.0

# Copy package.json and package-lock.json to the container's root directory
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the rest of the app source code to the container
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Set the environment variable for the app version number
ENV APP_VERSION=$APP_VERSION

# Start the app
CMD [ "npm", "start" ]
