# Verwende das Node.js-Image
FROM node:16-alpine

# Installiere OpenJDK
RUN apk update && apk add --no-cache openjdk11

# Arbeitsverzeichnis setzen
WORKDIR /app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm install

# App-Code kopieren
COPY . .

# Exponiere Port
EXPOSE 10100

# Startbefehl
CMD ["node", "app.js"]