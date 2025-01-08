# Verwende ein NGINX-Image
FROM nginx:alpine

# Kopiere den Frontend-Code in den NGINX-Webroot
COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponiere Port 10101
EXPOSE 10101
