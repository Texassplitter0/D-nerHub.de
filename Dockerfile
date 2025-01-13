FROM node:16 AS base

WORKDIR /app/backend
COPY backend/ ./
RUN npm install

WORKDIR /app/frontend
COPY frontend/ ./

WORKDIR /app/db
COPY db/ ./

EXPOSE 3000 3306

WORKDIR /app/backend
CMD ["node", "server.js"]
