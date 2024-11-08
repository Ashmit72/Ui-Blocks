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

#STEP 2:SERVER WITH NGINX
FROM nginx:1-alpine3.20

# WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

EXPOSE 443

ENTRYPOINT [ "nginx","-g","daemon off;" ]
