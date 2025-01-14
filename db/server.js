const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

// Create Express app
const app = express();
app.use(express.json());

// Load database configuration from my.cnf or use default values
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
    port: process.env.DB_PORT || 3306
};

// Create a MySQL connection
const db = mysql.createConnection(dbConfig);

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    console.log('Connected to the database');
});

// Initialize the database using init.sql
const initSqlPath = path.join(__dirname, 'init.sql');
fs.readFile(initSqlPath, 'utf8', (err, sql) => {
    if (err) {
        console.error('Error reading init.sql:', err);
        return;
    }
    db.query(sql, (err) => {
        if (err) {
            console.error('Error executing init.sql:', err);
        } else {
            console.log('Database initialized successfully');
        }
    });
});

// Sample route to test the database connection
app.get('/api/test', (req, res) => {
    db.query('SELECT 1 + 1 AS result', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json({ result: results[0].result });
    });
});

// Start the server
const PORT = process.env.DB_PORT || 3001;
app.listen(PORT, () => {
    console.log(`DB server running on port ${PORT}`);
});
