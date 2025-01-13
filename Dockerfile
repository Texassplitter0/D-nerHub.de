# Verwende Node.js als Basis-Image
FROM node:16 AS base

# Setze das Arbeitsverzeichnis für das Backend
WORKDIR /app/backend

# Kopiere die Backend-Dateien
COPY backend/ ./

# Installiere die Backend-Abhängigkeiten
RUN npm install

# Setze das Arbeitsverzeichnis für das Frontend
WORKDIR /app/frontend

# Kopiere die Frontend-Dateien
COPY frontend/ ./

# Setze das Arbeitsverzeichnis für die Datenbankinitialisierung
WORKDIR /app/db

# Kopiere die Datenbankdateien
COPY db/ ./

# Exponiere die Ports für das Backend und die Datenbank
EXPOSE 3000 3306

# Setze das Arbeitsverzeichnis zurück auf das Backend
WORKDIR /app/backend

# Starte den Backend-Server
CMD ["node", "server.js"]
