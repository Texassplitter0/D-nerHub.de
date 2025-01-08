
# Use a base image for Node.js and MySQL
FROM node:16 AS base

# Set working directory for backend
WORKDIR /app

# Copy backend files
COPY doener-website/backend/ ./backend/

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend files
COPY doener-website/frontend/ ./

# Set working directory for database initialization
WORKDIR /app/db

# Copy database files
COPY doener-website/db/ ./

# Expose ports for backend and database
EXPOSE 3000 3306

# Set default working directory
WORKDIR /app/backend

# Start backend and database services
CMD ["node", "server.js"]
