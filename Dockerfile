# Verwende Node.js als Basis-Image
FROM node:16 AS base

# Install build tools
RUN apt-get update && apt-get install -y build-essential

# Setze das Arbeitsverzeichnis für das Backend
WORKDIR /app/backend
COPY backend/ ./
RUN npm install

# Setze das Arbeitsverzeichnis für das Frontend
WORKDIR /app/frontend
COPY frontend/ ./

# Setze das Arbeitsverzeichnis für die Datenbank
WORKDIR /app/db
COPY db/ ./
RUN npm install

# Exponiere den Port für den Backend-Server
EXPOSE 10100

# Verhindere das Überschreiben von node_modules durch Volumes
VOLUME [ "/app/backend/node_modules" ]

# Definiere den Startbefehl für den Backend-Server
CMD ["node", "server.js"]
