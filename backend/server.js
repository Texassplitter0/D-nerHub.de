const express = require('express');
const cors = require('cors');

// CORS-Konfiguration
app.use(cors({
    origin: 'http://localhost', // Erlaubt Frontend auf localhost
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Cookies/Headers erlauben
}));

// Restlicher Backend-Code
const app = require('./app'); // Import der App-Logik aus app.js

const PORT = process.env.PORT || 10100;

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
