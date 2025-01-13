# Verwende Node.js als Basis-Image
FROM node:16 AS base

# Setze das Arbeitsverzeichnis für das Backend
WORKDIR /app/backend

# Kopiere nur package.json und package-lock.json
COPY backend/package*.json ./

# Installiere die Backend-Abhängigkeiten
RUN npm install

# Kopiere den restlichen Backend-Code
COPY backend/ ./

# Exponiere Port 3000
EXPOSE 3000

# Verhindere das Überschreiben von node_modules durch Volumes
VOLUME [ "/app/backend/node_modules" ]

# Starte den Backend-Server
CMD ["node", "server.js"]
