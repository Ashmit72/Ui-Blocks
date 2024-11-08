#SETP 1: BUILD THE REACT APP
# set the base image to create the image for react app
FROM node:20-alpine AS build

# set the working directory to /app 
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# build the react application
RUN npm run build

# Uses the official Nginx 1 Alpine image as the base image
FROM nginx:1-alpine3.20

# Sets the working directory for Nginx to serve files
WORKDIR /usr/share/nginx/html

# Removes any existing files in the Nginx default directory
RUN rm -rf *

# Copy the built React app from the previous stage into the Nginx
COPY --from=build /app/dist .

# Exposes port 80 for HTTP traffic
EXPOSE 80

# Exposes port 443 for HTTPS traffic (if SSL is configured)
EXPOSE 443

# Sets the command to run Nginx in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
