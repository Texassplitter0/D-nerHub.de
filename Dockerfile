# Verwende Node.js als Basis-Image
FROM node:16 AS base

# Setze das Arbeitsverzeichnis für das Backend
WORKDIR /app/backend

# Kopiere die Backend-Dateien
COPY backend/package*.json ./

# Installiere die Backend-Abhängigkeiten
RUN npm install

# Kopiere den restlichen Backend-Code
COPY backend/ ./

# Exponiere die Ports für das Backend
EXPOSE 3000

# Starte den Backend-Server
CMD ["node", "server.js"]
