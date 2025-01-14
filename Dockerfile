# Verwende Node.js als Basis-Image
FROM node:16 AS base

# Install build tools
RUN apt-get update && apt-get install -y build-essential

# Setze das Arbeitsverzeichnis für das Backend
WORKDIR /app/backend

# Copy backend files
COPY backend/ ./backend/

# Install backend dependencies
WORKDIR /app
COPY backend/package.json ./
RUN npm install

# Kopiere den restlichen Backend-Code
COPY backend/ ./

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend files
COPY frontend/ ./

# Set working directory for database initialization
WORKDIR /app/db

# Copy database files
COPY db/ ./

# Exponiere den Port für den Backend-Server
EXPOSE 10100

# Verhindere das Überschreiben von node_modules durch Volumes
VOLUME [ "/app/backend/node_modules" ]

# Definiere den Startbefehl für den Backend-Server
CMD ["node", "server.js"]
