
#SETP 1: BUILD THE REACT APP
# set the base image to create the image for react app
FROM node:20-alpine as build

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

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/dist .

# Create a directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Copy your SSL certificate and key into the container
COPY cert/dev_radianos.cert /etc/nginx/ssl/dev_radianos.crt
COPY cert/dev_radianos.key /etc/nginx/ssl/dev_radainos.key

# Create a basic Nginx configuration using heredoc
RUN cat <<EOF > /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name dev.radianos.com www.dev.radianos.com;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name dev.radianos.com www.dev.radianos.com;

    ssl_certificate /etc/nginx/ssl/dev_radianos.crt;
    ssl_certificate_key /etc/nginx/ssl/dev_radianos.key;

    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

EXPOSE 80

EXPOSE 443

ENTRYPOINT [ "nginx","-g","daemon off;" ]