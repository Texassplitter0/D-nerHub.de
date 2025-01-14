# Verwende Node.js als Basis-Image
FROM node:16 AS base

# Setze das Arbeitsverzeichnis für das Backend
WORKDIR /app/backend

# Kopiere nur die package.json und package-lock.json Dateien
COPY backend/package*.json ./

# Installiere die Backend-Abhängigkeiten
RUN npm install --production

# Kopiere den restlichen Backend-Code
COPY backend/ ./

# Exponiere den Port für den Backend-Server
EXPOSE 10100

# Verhindere das Überschreiben von node_modules durch Volumes
VOLUME [ "/app/backend/node_modules" ]

# Definiere den Startbefehl für den Backend-Server
CMD ["node", "server.js"]
